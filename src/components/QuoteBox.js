import React from 'react';
import PropTypes from 'prop-types';

import QuoteButton from './QuoteButton';
import SocialButtons from './SocialButtons';
import QuoteDisplay from './QuoteDisplay';

const QuoteBox = props => (
  <div
    className="quote-box"
    style={{
      backgroundColor: props.theme.colorboxbg, borderColor: props.theme.coloroutline
    }}
  >
    <QuoteDisplay
      currentQuote={props.currentQuote}
      currentAuthor={props.currentAuthor}
      theme={props.theme}
    />
    <div className="bottom-bar">
      <SocialButtons
        currentQuote={props.currentQuote}
        currentAuthor={props.currentAuthor}
      />
      <QuoteButton
        getQuote={props.getQuote}
        theme={props.theme}
      />
    </div>
  </div>
);

QuoteBox.propTypes = {
  currentQuote: PropTypes.string,
  currentAuthor: PropTypes.string,
  getQuote: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string)
};

QuoteBox.defaultProps = {
  currentQuote: 'Loading...',
  currentAuthor: '',
  theme: {
    colorbg: '#FFF689',
    colorboxbg: '#58355E',
    coloroutline: '#7AE7C7',
    colortext: '#D6FFB7',
    colorarrow: '#EC0B43'
  }
};

export default QuoteBox;
