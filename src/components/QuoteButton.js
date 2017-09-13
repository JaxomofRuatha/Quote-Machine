import React from 'react';

export const QuoteButton = (props) => {
  return (
    <button className="quote-button" onClick={props.getQuote}> <strong>>></strong></button>
  );
}