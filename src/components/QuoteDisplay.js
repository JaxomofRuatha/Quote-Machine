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

<<<<<<< HEAD
const StyledDisplay = styled.main`
  background-color: ${props =>
=======
const StyledDisplay = styled.section`
  background: ${props =>
>>>>>>> bd010a3b4bbd7bc8254e6efb8f958cf8e409f33a
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
<<<<<<< HEAD
=======

  @media only screen and (max-width: 600px) {
    font-size: 1rem;
  }

  @media only screen and (max-width: 400px) {
    font-size: 0.8rem;
    
    .quote-display__current {
      font-size: 1.2rem;
    }
  }
>>>>>>> bd010a3b4bbd7bc8254e6efb8f958cf8e409f33a
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
