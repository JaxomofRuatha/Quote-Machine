import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const QuoteButton = props => (
  <StyledButton theme={props.theme} onClick={props.getQuote}>
    {props.loading ? '...' : String.fromCharCode(8667)}
  </StyledButton>
);

const StyledButton = styled.button`
  color: ${props => props.theme.colorarrow};
  width: 7rem;
  height: 90%;
  border: 3px solid ${props => props.theme.coloroutline};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  border-bottom: 0;
  background: transparent;
  &:hover,
  active {
    color: ${props => props.theme.colorboxbg};
    background: ${props => props.theme.coloroutline};
    cursor: pointer;
  }
`;

QuoteButton.propTypes = {
  getQuote: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string).isRequired,
  loading: PropTypes.bool.isRequired
};

export default QuoteButton;
