import React from 'react';

export class QuoteDisplay extends React.Component {

  render () {
    return (
      <div id="quote-display">
        <div id="current-quote"> 
          <p>{this.props.currentQuote}</p>
        </div> 
        <div>
          <p>{this.props.currentAuthor}</p>
        </div>   
      </div>
    );
  }
}