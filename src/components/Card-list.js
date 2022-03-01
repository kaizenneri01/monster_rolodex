import React from "react";
import { Cards } from "./Cards";
import "./Card-lists-styles.css";

export const CardList = (props) => {
  return (
    <div className="Card-list">
      {props.monsters.map((monster) => (
        <Cards key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
