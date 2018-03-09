import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const QuoteDisplay = ({ theme, currentQuote, currentAuthor }) => (
  <StyledDisplay className="quote-display" theme={theme}>
    <div className="quote-display__current">
      <p>{currentQuote}</p>
    </div>
    <div>
      <p>-- {currentAuthor}</p>
    </div>
  </StyledDisplay>
);

const StyledDisplay = styled.main`
  background-color: ${props =>
    tinycolor(props.theme.colorboxbg)
      .lighten(5)
      .toString()};
  color: ${props => props.theme.colortext};
  text-align: right;
  padding: 0 2rem;
  flex: 3;
  font-size: 2rem;

  .quote-display__current {
    text-align: center;
    font-size: 2.5rem;
  }
`;

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
