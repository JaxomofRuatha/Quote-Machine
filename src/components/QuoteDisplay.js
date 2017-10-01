import React from 'react';
import tinycolor from "tinycolor2";

export const QuoteDisplay = (props) => {
  return (
    <div className="quote-display" style={{ backgroundColor: tinycolor(props.theme.colorbox).lighten(5).toString(), color: props.theme.colortext }}>
      <div className="quote-display__current"> 
        <p>{props.currentQuote}</p>
      </div> 
      <div>
        <p>-- {props.currentAuthor}</p>
      </div>   
    </div>
  );
}