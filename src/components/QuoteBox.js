import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import QuoteButton from './QuoteButton';
import SocialButtons from './SocialButtons';
import QuoteDisplay from './QuoteDisplay';

const QuoteBox = ({
  theme, currentQuote, currentAuthor, getQuote
}) => (
  <StyledBox
    className="quote-box"
    style={{
      backgroundColor: theme.colorboxbg,
      borderColor: theme.coloroutline
    }}
  >
    <QuoteDisplay currentQuote={currentQuote} currentAuthor={currentAuthor} theme={theme} />
    <nav className="control-bar">
      <SocialButtons currentQuote={currentQuote} currentAuthor={currentAuthor} />
      <QuoteButton getQuote={getQuote} theme={theme} />
    </nav>
  </StyledBox>
);

const StyledBox = styled.main`
  text-align: center;
`;

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
