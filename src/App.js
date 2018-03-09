import React from 'react';

import apiSkeleton from './utils/api-helpers';
import themeSet from './utils/themes';

import QuoteBox from './components/QuoteBox';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote = () => {
    const options = {
      cache: 'default',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      },
      method: 'GET'
    };
    const url =
      'https://cors-anywhere.herokuapp.com/http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json&json=?';

    apiSkeleton(url, options)
      .then(res => {
        const theme = Math.floor(Math.random() * themeSet.length);
        this.setState(
          {
            currentQuote: res.quoteText,
            currentAuthor: res.quoteAuthor,
            theme: themeSet[theme]
          },
          () => {
            document.body.style.backgroundColor = this.state.theme.colorbg;
          }
        );
      })
      .catch(err => {
        console.warn(err);
      });
  };

  render() {
    return (
      <QuoteBox
        currentQuote={this.state.currentQuote}
        currentAuthor={this.state.currentAuthor}
        getQuote={this.newQuote}
        theme={this.state.theme}
      />
    );
  }
}

export default App;
