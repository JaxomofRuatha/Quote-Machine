import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const QuoteButton = props => (
  <ButtonNext theme={props.theme} onClick={props.getQuote}>
    <strong>&gt;&gt;</strong>
  </ButtonNext>
);

const ButtonNext = styled.button`
  color: ${props => props.theme.colorarrow};
  outline: 0;
  height: 3rem;
  width: 7rem;
  border: 3px solid ${props => props.theme.coloroutline};
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  font-size: 2rem;
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

QuoteButton.propTypes = {
  getQuote: PropTypes.func.isRequired,
  theme: PropTypes.objectOf(PropTypes.string)
};

QuoteButton.defaultProps = {
  theme: {
    colorbg: '#FFF689',
    colorboxbg: '#58355E',
    coloroutline: '#7AE7C7',
    colortext: '#D6FFB7',
    colorarrow: '#EC0B43'
  }
};

export default QuoteButton;
