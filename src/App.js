import React from 'react';

import apiSkeleton from './utils/api-helpers';
import fetchQuote from './api/fetch-quote';
import themeSet from './utils/themes';

import QuoteBox from './components/QuoteBox';
import Loading from './components/Loading';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: true
    };
  }

  componentDidMount() {
    this.newQuote();
  }

  newQuote = async () => {
    this.setState({ loading: true });
    const quoteData = await fetchQuote(apiSkeleton, themeSet);

    this.setState(Object.assign({}, quoteData, { loading: false }), () => {
      document.body.style.backgroundColor = this.state.theme.colorbg;
    });
  };

  render() {
    return (
      <React.Fragment>
        {this.state.loading && !this.state.currentQuote && <Loading />}
        {this.state.currentQuote && (
          <QuoteBox
            currentQuote={this.state.currentQuote}
            currentAuthor={this.state.currentAuthor}
            getQuote={this.newQuote}
            theme={this.state.theme}
            loading={this.state.loading}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
