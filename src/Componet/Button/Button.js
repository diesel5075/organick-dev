import React from "react";
import "../Button/Button.css"
const Button = (props) => {
  return (
    <>
      <p
        className="shopnowbutton btn " onClick={props.onClick}
        style={{
          backgroundColor: props.bg_color,
          color: props.color,
          border: props.border,
          fontWeight: props.fontw,
          fontSize: props.fontsize,
          margin:props.margin,
        }}
      >
        {props.name} {props.icon}
      </p>
    </>
  );
};

export default Button;
