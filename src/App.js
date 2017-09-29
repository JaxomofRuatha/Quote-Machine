import React from "react";
import * as APIHelpers from "./utils/APIHelpers";
import { QuoteBox } from "./components/QuoteBox";
import { themeSet } from "./utils/themes";

export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      currentAuthor: "",
      theme: {
        colorbg: "#FFF689",
        colorbox: "#58355E",
        coloroutline: "#7AE7C7",
        colortext: "#D6FFB7",
        colorbutton: "#EC0B43"
      }
    }
  }

  _newQuote = () => {

    const options = {
      cache: "default",
      dataType: "jsonp",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded"
      },
      method: "GET"
    }

    const url = "https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?";

    APIHelpers.apiSkeleton(url, options, this._onQuoteSuccess, this._onQuoteFail);
  }

  _onQuoteSuccess = (res) => {
    const theme = {
      colorbg: themeSet.colorbg,
      colorbox: themeSet.colorbox,
      coloroutline: themeSet.coloroutline,
      colortext: themeSet.colortext,
      colorbutton: themeSet.colorbutton
    };

    this.setState({
      currentQuote: res.quoteText,
      currentAuthor: res.quoteAuthor,
      theme
    }, () => {
      document.body.style.backgroundColor = this.state.theme.colorbg;
    });
  }

  _onQuoteFail = (error) => {
    this.setState({
      currentQuote: "Cannot retrieve new quote :( Try Again!",
      currentAuthor: "",
      error: new Error("Cannot retrieve new quote :(")
    });
  }

  componentDidMount() {
    this._newQuote();
  }

  render() {
    return (<QuoteBox
      currentQuote={this.state.currentQuote}
      currentAuthor={this.state.currentAuthor}
      getQuote={this._newQuote}
      theme = {this.state.theme}
    />);
  }
}