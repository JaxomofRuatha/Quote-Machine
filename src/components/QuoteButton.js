import React from 'react';
import styled from 'styled-components';

const ButtonNext = styled.button`
  color: ${props => props.theme.colorarrow};
  outline: 0;
  height: 2.5rem;
  width: 6rem;
  border: 3px solid ${props => props.theme.coloroutline};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 2em;
  border-bottom: 0;
  position: absolute;
  background: transparent;
  transition: all 0.2s;
  padding: 0;
  &:hover {
    color: ${props => props.theme.colorboxbg};
    background: ${props => props.theme.coloroutline};
    cursor: pointer;
  }
`;

export default const QuoteButton = props => (
  <ButtonNext
      theme={props.theme}
      onClick={props.getQuote}
    >
      <strong>>></strong>
    </ButtonNext>
);
