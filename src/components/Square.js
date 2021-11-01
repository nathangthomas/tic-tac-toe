import React, { useState } from "react";
import ReactDOM from "react-dom";

function Square({ value, onClick }) {

  return (
    <button className="square" onClick={onClick}>
      {value}
    </button>
  );
}

export default Square;