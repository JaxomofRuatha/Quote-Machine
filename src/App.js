import React from "react";
import * as APIHelpers from "./utils/APIHelpers";
import { QuoteBox } from "./components/QuoteBox";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      currentAuthor: ""
    }
  }

  _newQuote = () => {

    const url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

    APIHelpers.apiSkeleton(url, APIHelpers.options, this._onQuoteSuccess, this._onQuoteFail);
  }

  _onQuoteSuccess = (res) => {
    this.setState({
      currentQuote: res.quoteText,
      currentAuthor: res.quoteAuthor
    })
    //When quote changes, target background, 
  }

  _onQuoteFail = (error) => {
    this.setState({
      currentQuote: "Cannot retrieve new quote :( Try Again!",
      currentAuthor: "",
      error: new Error("Cannot retrieve new quote :(")
    })
  }

  componentDidMount() {
    this._newQuote();
  }

  render() {
    return (<QuoteBox
      currentQuote={this.state.currentQuote}
      currentAuthor={this.state.currentAuthor}
      getQuote={this._newQuote}
    />);
  }
}