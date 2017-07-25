import React from 'react';

export class QuoteButton extends React.Component {
  constructor (props) {
    super(props);
  }
  
  render () {
    return (
      <button id="new-quote">New Quote</button>
    );
  }
}