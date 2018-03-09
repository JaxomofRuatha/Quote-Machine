import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import QuoteButton from './QuoteButton';
import SocialButtons from './SocialButtons';
import QuoteDisplay from './QuoteDisplay';

const QuoteBox = ({ theme, currentQuote, currentAuthor, getQuote }) => (
  <StyledBox theme={theme}>
    <QuoteDisplay
      currentQuote={currentQuote}
      currentAuthor={currentAuthor}
      theme={theme}
    />
    <nav className="control-bar">
      <SocialButtons
        currentQuote={currentQuote}
        currentAuthor={currentAuthor}
      />
      <QuoteButton getQuote={getQuote} theme={theme} />
    </nav>
  </StyledBox>
);

const StyledBox = styled.main`
  background: ${props => props.theme.colorboxbg};
  border: 0.2rem solid;
  border-top: 1rem solid;
  border-color: ${props => props.theme.coloroutline};
  position: relative;
  text-align: center;
  width: 90%;
  height: 20rem;
  margin: 30vh auto 0 auto;
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
