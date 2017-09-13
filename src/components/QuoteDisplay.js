import React from 'react';

export const QuoteDisplay = (props) => {
  return (
    <div className="quote-display">
      <div className="quote-display__current"> 
        <p>{props.currentQuote}</p>
      </div> 
      <div>
        <p>-- {props.currentAuthor}</p>
      </div>   
    </div>
  );
}