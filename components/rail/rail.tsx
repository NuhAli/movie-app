import React from "react";
import { RailItem, RailTitle, RailWrapper } from "./rail.style";
import IMediaItem from "../cards/media-item";
import TrendingCard from "../cards/trending-card/trending-card";
import { useMediaQuery } from "../../hooks/use-media-query";

interface IRail {
  items: Array<IMediaItem>;
}

const Rail = ({ items }: IRail) => {
  const isLarge = useMediaQuery("(min-width: 768px)");

  const renderCards = () => {
    return items.map((item, index) => {
      return <TrendingCard item={item} key={index} />;
    });
  };

  return (
    <RailItem>
      <RailTitle>Trending</RailTitle>
      <RailWrapper
        drag="x"
        dragConstraints={{ right: 0, left: isLarge ? -1700 : -890 }}
        whileTap={{ cursor: "grabbing" }}
      >
        {renderCards()}
      </RailWrapper>
    </RailItem>
  );
};

export default Rail;
