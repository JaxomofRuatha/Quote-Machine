import React from 'react';

export class QuoteDisplay extends React.Component {

  render () {
    return (
      <div id="quote-display">
        <p>{this.props.currentQuote}</p>
      </div>
    );
  }
}