import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import tinycolor from 'tinycolor2';

const QuoteDisplay = ({ theme, currentQuote, currentAuthor }) => (
  <StyledDisplay className="quote-display" theme={theme}>
    <p className="quote-display__quote">{currentQuote}</p>
    <p className="quote-display__author">-- {currentAuthor}</p>
  </StyledDisplay>
);

const StyledDisplay = styled.section`
  background: ${props =>
    tinycolor(props.theme.colorboxbg)
      .lighten(5)
      .toString()};
  color: ${props => props.theme.colortext};
  padding: 0 2rem;
  flex: 3;

  .quote-display__quote {
    font-size: 2.5rem;
    @media screen and (max-width: 600px) {
      font-size: 2rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.7rem;
    }
  }

  .quote-display__author {
    font-size: 2rem;
    text-align: right;
    @media screen and (max-width: 600px) {
      font-size: 1.5rem;
    }

    @media screen and (max-width: 400px) {
      font-size: 1.2rem;
    }
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
