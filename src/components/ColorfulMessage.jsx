import React from "react";

const contentStyle = {
  color: "blue",
  fontSize: "18px"
};

const ColorfulMessage = (props) => {
  const contentStyle = {
    color: props.color,
    fontSize: "18px"
  };
  return <h1 style={contentStyle}>{props.children}</h1>;
};

export default ColorfulMessage;
