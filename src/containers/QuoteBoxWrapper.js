import React from "react";
import { QuoteBox } from "../components/QuoteBox";

const quoteurl = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";
const options = {
  cache: "default",
  dataType: "json",
  headers: {
    "Content-Type": "application/x-www-form-urlencoded"
  },
  method: "GET",
  mode: "cors"
};

export class QuoteBoxWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      requestFailed: false
    }
    this._newQuote = this._newQuote.bind(this);
  }

  _newQuote() {

    fetch(quoteurl, options)
      .then(response => {
        if (!response.ok) {
          throw new Error("Quote request failed");
        }
        return response.json();
      })
      //.then(d => d.json())
      .then(d => {
        this.setState({
          currentQuote: d.quoteText,
          currentAuthor: d.quoteAuthor
        })
      })
      .catch(err => {
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