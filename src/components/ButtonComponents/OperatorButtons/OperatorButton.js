import React from "react";

const OperatorButton = ( {char, handleEqual, value, handleButton}) => {
  
  if (char === "=") {
    return (<button className="equal operator-buttons buttons" value={char} onClick={handleEqual}>{char}</button>);
  } else 
  return (
    <>
      {/* Display a button element rendering the data being passed down from the parent container on props */}
      <button className="operator-buttons buttons" value={value} onClick={handleButton}>{char}</button>
    </>
  );
};

export default OperatorButton;
