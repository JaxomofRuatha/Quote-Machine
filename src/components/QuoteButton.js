import React from 'react';

export class QuoteButton extends React.Component {

  render () {
    return (
      <button id="new-quote" onClick={this.props.getQuote}>New Quote</button>
    );
  }
}