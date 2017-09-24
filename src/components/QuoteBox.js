import React from 'react';
import { QuoteButton } from "./QuoteButton";
import { SocialButtons } from "./SocialButtons";
import { QuoteDisplay } from "./QuoteDisplay";
import tinycolor from "tinycolor2";

export const QuoteBox = (props) => {
  return (
    <div className="quote-box" style={{
      backgroundColor: props.theme.colorbox, borderColor: props.theme.coloroutline
    }}>
      <QuoteDisplay
        currentQuote={props.currentQuote}
        currentAuthor={props.currentAuthor} style={{ backgroundColor: tinycolor(props.theme.colorbox).lighten(5).toString(), color: props.theme.colortext}}
      />
      <div className="bottom-bar">
        <SocialButtons
          currentQuote={props.currentQuote}
          currentAuthor={props.currentAuthor}
        />
        <QuoteButton getQuote={props.getQuote} style={{borderColor: props.theme.coloroutline, color: props.theme.colorbutton}} />
      </div>
    </div>
  );
};