import React from 'react';
import { QuoteButton } from "./QuoteButton";
import { SocialButtons } from "./SocialButtons";
import { QuoteDisplay } from "./QuoteDisplay";

export const QuoteBox = (props) => {
  return (
    <div className="quote-box" style={{
      backgroundColor: props.theme.colorbox, borderColor: props.theme.coloroutline
    }}>
      <QuoteDisplay
        currentQuote={props.currentQuote}
        currentAuthor={props.currentAuthor}
        theme={props.theme}
      />
      <div className="bottom-bar">
        <SocialButtons
          currentQuote={props.currentQuote}
          currentAuthor={props.currentAuthor}
        />
        <QuoteButton
          getQuote={props.getQuote}
          theme={props.theme} />
      </div>
    </div>
  );
};