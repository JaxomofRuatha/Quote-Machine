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
  left: 50%;
`;

export default Loading;
