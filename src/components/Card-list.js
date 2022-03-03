import React from "react";
import { Cards } from "./Cards";
import "./Card-lists-styles.css";

export const CardList = ({ monsters }) => {
  return (
    <div className="Card-list">
      {monsters.map((monster) => (
        <Cards key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
