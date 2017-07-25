import React from "react";
import { QuoteBox } from "../components/QuoteBox";

export class QuoteBoxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  _newQuote() {
    const quoteurl = "https://crossorigin.me/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=jsonp&jsonp=?";
    const options = {
      cache: "default",
      dataType: "jsonp",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET",
      mode: "cors"
    };

    fetch(quoteurl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Quote request failed");
        }
        return response;
      })
      .then(d => d.json())
      .then(d => {
        this.setState({
          currentQuote: d.quoteText,
          currentAuthor: d.quoteAuthor
        })
      }, () => {
          this.setState({
            requestFailed: true
          })
      })
    
    if (this.state.requestFailed) {
      return this.setState (<p>Cannot retrieve new quote :(</p>)
    }

    if (!this.state.currentQuote) {
      return this.setState (<p>Loading...</p>)
    }
  }

  componentDidMount() {
    this._newQuote();
  }

  render() {
    return <QuoteBox
      currentQuote={this.state.currentQuote}
      currentAuthor={this.state.currentAuthor}
      getQuote={this._newQuote}
    />;
  }
}