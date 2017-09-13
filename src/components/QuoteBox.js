import React from 'react';
import { QuoteButton } from "./QuoteButton";
import { SocialButtons } from "./SocialButtons";
import { QuoteDisplay } from "./QuoteDisplay";

export const QuoteBox = (props) => {
  return (
    <div className="quote-box">
      <QuoteDisplay
        currentQuote={props.currentQuote}
        currentAuthor={props.currentAuthor}
      />
      <div className="bottom-bar">
        <SocialButtons
          currentQuote={props.currentQuote}
          currentAuthor={props.currentAuthor}
        />  
        <QuoteButton getQuote={props.getQuote} />
      </div>
    </div>
  );
}