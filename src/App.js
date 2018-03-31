import React from 'react';

import apiSkeleton from './utils/api-helpers';
import fetchQuote from './lib/data-fetching';
import themeSet from './utils/themes';

import QuoteBox from './components/QuoteBox';

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
        {this.state.loading && <h1>Loading...</h1>}
        {!this.state.loading && (
          <QuoteBox
            currentQuote={this.state.currentQuote}
            currentAuthor={this.state.currentAuthor}
            getQuote={this.newQuote}
            theme={this.state.theme}
          />
        )}
      </React.Fragment>
    );
  }
}

export default App;
