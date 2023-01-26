/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import Image from "next/image";
import {
  BookmarkIcon,
  CardBody,
  CardBookmarkContaienr,
  CardDescription,
  CardText,
  CardTextWrapper,
  CardTitle,
  Dot,
  TrendingWrapper,
} from "./trending-card.style";
import { useMediaQuery } from "../../../hooks/use-media-query";

import IMediaItem from "../media-item";
import { client } from "../../../utils/image-loader";
import { useNextSanityImage } from "next-sanity-image";

interface TrendingCardProps {
  item: IMediaItem;
}

const TrendingCard = ({ item }: TrendingCardProps) => {
  const [image, setImage] = useState("");

  const isSmall = useMediaQuery("(max-width: 767px )");
  const isLarge = useMediaQuery("(min-width: 768px)");

  useEffect(() => {
    const smallImage = item.thumbnail.trending?.small.asset._ref;
    const largeImage = item.thumbnail.trending?.large.asset._ref;
    if (isSmall && smallImage) {
      setImage(smallImage);
    } else if (isLarge && largeImage) {
      setImage(largeImage);
    }
  }, [isSmall, isLarge, item]);

  const imageProps = useNextSanityImage(client, image);

  const renderCorrectCategory = () => {
    return item.category === "Movie" ? (
      <img src="/assets/icon-category-movie.svg" alt="movie" />
    ) : (
      <img src="/assets/icon-category-tv.svg" alt="tv" />
    );
  };

  return (
    <TrendingWrapper>
      {image && (
        <Image
          src={imageProps.src}
          loader={imageProps.loader}
          alt={item.title}
          width={isSmall ? 240 : 470}
          height={isSmall ? 140 : 230}
          priority
        />
      )}
      <CardTextWrapper>
        <CardBookmarkContaienr>
          <BookmarkIcon>
            {item.isBookMarked ? (
              <img src="/assets/icon-bookmark-full.svg" alt="bookmark" />
            ) : (
              <img src="/assets/icon-bookmark-empty.svg" alt="bookmark" />
            )}
          </BookmarkIcon>
        </CardBookmarkContaienr>
        <CardText>
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
        </CardText>
      </CardTextWrapper>
    </TrendingWrapper>
  );
};

export default TrendingCard;
