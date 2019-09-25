import React from "react";

const NumberButton = ({ number, handleNumButton, }) => {

  if (number === 0) {
 return (<button className="zero number-buttons buttons" value ={number} onClick={handleNumButton}>{number}</button>);
} else {return (
   <>
     {/* Display a button element rendering the data being passed down from the parent container on props */}
     
     {
       <button className="number-buttons buttons" value ={number} onClick={handleNumButton}>{number}</button>
     }
     
   </>
 );}
}
export default NumberButton;
