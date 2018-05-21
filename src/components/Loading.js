import React from 'react';
import styled from 'styled-components';

const Loading = () => (
  <StyledLoading>
    <h1>Loading...</h1>
    <figure />
  </StyledLoading>
);

const StyledLoading = styled.div`
  position: fixed;
  top: 35%;
  width: 100%;
  text-align: center;
  font-weight: 200;
  color: #111;
`;

export default Loading;
