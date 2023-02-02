import React, { useId } from "react";
import IMediaItem from "../cards/media-item";
import GridCard from "../cards/grid-card/grid-card";
import { GridContainer, GridTitle, GridArea } from "./grid.style";

interface GridProps {
  items: IMediaItem[];
  heading: string;
}

const Grid = ({ items,heading }: GridProps) => {
  const id = useId();
  const renderCards = () => {
    return items.map((item, index) => {
      return <GridCard item={item} key={index} />;
    });
  };
  return (
    <GridContainer>
      <GridTitle>{heading}</GridTitle>
      <GridArea>{renderCards()}</GridArea>
    </GridContainer>
  );
};

export default Grid;
