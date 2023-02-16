/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useReducer, useState } from "react";
import Image from "next/image";
import styled from "styled-components";
import IMediaItem from "../media-item";
import { useNextSanityImage } from "next-sanity-image";
import { client } from "../../../utils/image-loader";
import { useMediaQuery } from "../../../hooks/use-media-query";
import { setBookMarkStatus } from "../../../utils/bookmark";
import { reducer, initialState, ImageActionKind } from "./grid-card-reducer";
import {
  Card,
  ImageContainer,
  BookmarkIconContainer,
  CardTextArea,
  CardDescription,
  CardBody,
  Dot,
  CardTitle,
} from "./grid-card.style";
import { Overlay, IconContainer } from "../trending-card/trending-card.style";

interface GridCardProps {
  item: IMediaItem;
}

const GridCard = ({ item }: GridCardProps) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [bookmarkIcon, setBookmarkIcon] = useState(
    "/assets/icon-bookmark-empty.svg"
  );
  const [image, setImage] = useState("");
  const [bookmark, setBookmark] = useState(false);
  const [play, setPlay] = useState(false);
  const isSmall = useMediaQuery("(max-width: 767px )");
  const isMedium = useMediaQuery("(max-width: 1439px )");
  const isLarge = useMediaQuery("(min-width: 1440px )");
  const imageProps = useNextSanityImage(client, image);

  useEffect(() => {
    setBookmark(item.isBookmarked);
  }, [item.isBookmarked]);

  useEffect(() => {
    if (item) {
      if (isSmall) {
        dispatch({
          type: ImageActionKind.SMALL,
          payload: {
            setter: setImage,
            image: item.thumbnail.regular?.small.asset._ref as string,
          },
        });
      } else if (isMedium) {
        dispatch({
          type: ImageActionKind.MEDIUM,
          payload: {
            setter: setImage,
            image: item.thumbnail.regular?.medium.asset._ref as string,
          },
        });
      } else if (isLarge) {
        dispatch({
          type: ImageActionKind.LARGE,
          payload: {
            setter: setImage,
            image: item.thumbnail.regular?.large.asset._ref as string,
          },
        });
      }
    }
  }, [isSmall, isLarge, isMedium, item]);

  useEffect(() => {
    if (bookmark) {
      setBookmarkIcon("/assets/icon-bookmark-full.svg");
    } else {
      setBookmarkIcon("/assets/icon-bookmark-empty.svg");
    }
  }, [bookmark]);

  const renderCorrectCategory = () => {
    return item.category === "Movie" ? (
      <img src="/assets/icon-category-movie.svg" alt="movie" />
    ) : (
      <img src="/assets/icon-category-tv.svg" alt="tv" />
    );
  };

  const handleBookMark = () => {
    setBookMarkStatus(item._id, !bookmark)
      .then(() => {
        setBookmark(!bookmark);
      })
      .catch((err) => {
        alert(
          "Media could not be edited, please refresh the page and try again"
        );
      });
  };

  const togglePlay = () => setPlay(!play);

  return (
    <Card
      onMouseEnter={() => setPlay(true)}
      onMouseLeave={() => setPlay(false)}
    >
      <ImageContainer>
      <Overlay  animate={play ? { opacity: 1 } : { opacity: 0 }}>
        <IconContainer>
          <img
            src="/assets/icon-play.svg"
            alt="play-icon"
            width={30}
            height={30}
          />
          <span>Play</span>
        </IconContainer>
      </Overlay>
        <BookmarkIconContainer onClick={handleBookMark}>
          <img src={bookmarkIcon} alt="bookmark" />
        </BookmarkIconContainer>
        {image && (
          <Image
            src={imageProps.src}
            loader={imageProps.loader}
            alt={item.title}
            width={state.width}
            height={state.height}
            priority
            quality={100}
          />
        )}
      </ImageContainer>
      <CardTextArea>
        <CardDescription>
          <CardBody>{item.year}</CardBody>
          <Dot>
            <span>.</span>
          </Dot>
          <CardBody>
            {" "}
            {renderCorrectCategory()}
            {item.category}
          </CardBody>
          <Dot>
            <span>.</span>
          </Dot>
          <CardBody>{item.rating}</CardBody>
        </CardDescription>
        <CardTitle>{item.title}</CardTitle>
      </CardTextArea>
    </Card>
  );
};

export default GridCard;
