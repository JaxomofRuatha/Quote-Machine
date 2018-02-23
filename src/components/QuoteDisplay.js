import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

const QuoteDisplay = ({ theme, currentQuote, currentAuthor }) => (
  <div
    className="quote-display"
    style={{
      backgroundColor: tinycolor(theme.colorboxbg)
        .lighten(5)
        .toString(),
      color: theme.colortext
    }}
  >
    <div className="quote-display__current">
      <p>{currentQuote}</p>
    </div>
    <div>
      <p>-- {currentAuthor}</p>
    </div>
  </div>
);

QuoteDisplay.propTypes = {
  currentQuote: PropTypes.string,
  currentAuthor: PropTypes.string,
  theme: PropTypes.objectOf(PropTypes.string)
};

QuoteDisplay.defaultProps = {
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

export default QuoteDisplay;
