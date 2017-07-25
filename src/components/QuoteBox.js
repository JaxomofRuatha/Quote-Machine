import React from 'react';
import { QuoteButton } from "./QuoteButton";
import { SocialButtons } from "./SocialButtons";
import { QuoteDisplay } from "./QuoteDisplay";

export class QuoteBox extends React.Component {

  render () {
    return (
      <div id="main-box">
        <h1>Your wisdom for today...</h1>
        <QuoteDisplay
          currentQuote={this.props.currentQuote}
          currentAuthor={this.props.currentAuthor}
        />
        <div id="bottom-bar">
          <QuoteButton onClick={this.props._newQuote} />
          <SocialButtons />
        </div>
      </div>
    );
  }
}