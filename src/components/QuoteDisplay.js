import React from 'react';
import PropTypes from 'prop-types';
import tinycolor from 'tinycolor2';

const QuoteDisplay = props => (
  <div className="quote-display" style={{ backgroundColor: tinycolor(props.theme.colorboxbg).lighten(5).toString(), color: props.theme.colortext }}>
    <div className="quote-display__current">
      <p>{props.currentQuote}</p>
    </div>
    <div>
      <p>-- {props.currentAuthor}</p>
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
