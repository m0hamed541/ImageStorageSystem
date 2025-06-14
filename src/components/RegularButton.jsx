import React from "react";

function RegularButton({ text, onClick, children, ...props }) {
  return (
    <button className="regularButton" onClick={onClick} {...props}>
      {children || text}
    </button>
  );
}

export default RegularButton;