import React from "react";
import "./Cards-style.css";

export const Cards = ({ monster }) => (
  <div className="card-container">
    <img
      alt="monsters"
      src={`https://robohash.org/${monster.id}?set=set2&size=200x200`}
    ></img>
    <h2> {monster.name} </h2>
    <p> {monster.email}</p>
  </div>
);
