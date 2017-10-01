import React from 'react';

export const QuoteButton = (props) => {
  return (
    <button
      className="quote-button"
      style={{ borderColor: props.theme.coloroutline, color: props.theme.colorbutton }}
      onClick={props.getQuote}> <strong>>></strong></button>
  );
}