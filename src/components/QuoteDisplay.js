import React from 'react';

export class QuoteDisplay extends React.Component {
  constructor (props) {
    super (props);
  }
  //Display the current result of the fetch request
  
  render () {
    return (
      <div id="quote-display">
        <p>{this.props.currentQuote}</p>
      </div>
    );
  }
}