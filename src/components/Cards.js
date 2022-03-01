import React from "react";
import "./Cards-style.css";

export const Cards = (props) => (
  <div className="card-container">
    <img
      alt="monsters"
      src={`https://robohash.org/${props.monster.id}?set=set2&size=200x200`}
    ></img>
    <h1> {props.monster.name} </h1>
    <p> {props.monster.email}</p>
  </div>
);
