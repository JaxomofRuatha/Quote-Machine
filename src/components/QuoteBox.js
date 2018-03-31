import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import QuoteButton from './QuoteButton';
import SocialButton from './SocialButton';
import QuoteDisplay from './QuoteDisplay';

const QuoteBox = ({
  theme, currentQuote, currentAuthor, getQuote
}) => (
  <StyledBox className="quote-box" theme={theme}>
    <QuoteDisplay currentQuote={currentQuote} currentAuthor={currentAuthor} theme={theme} />
    <nav className="control-bar">
      <SocialButton currentQuote={currentQuote} currentAuthor={currentAuthor} type="tumblr" />
      <QuoteButton getQuote={getQuote} theme={theme} />
      <SocialButton currentQuote={currentQuote} currentAuthor={currentAuthor} type="twitter" />
    </nav>
  </StyledBox>
);

const StyledBox = styled.main`
  font-family: 'Spectral';
  text-align: center;
  height: 25%;
  width: 90%;
  margin: 30vh auto 0 auto;
  background: ${props => props.theme.colorboxbg};
  border: 0.2rem solid ${props => props.theme.coloroutline};
  border-top: 1rem solid ${props => props.theme.coloroutline};
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  .control-bar {
    display: flex;
    justify-content: center;
    align-items: flex-end;
    flex: 1;
    position: relative;
  }
`;

QuoteBox.propTypes = {
  currentQuote: PropTypes.string,
  currentAuthor: PropTypes.string,
  getQuote: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string)
};

QuoteBox.defaultProps = {
  currentQuote: '',
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
