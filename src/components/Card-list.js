import React from "react";
import "./Card-lists-styles.css";

export const CardList = ({ children }) => {
  console.log(children);
  return <div className="Card-list">{children}</div>;
};
