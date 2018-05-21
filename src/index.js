import React from 'react';
import ReactDOM from 'react-dom';
import { injectGlobal } from 'styled-components';

import 'normalize.css';
import App from './App';

injectGlobal`
  @font-face {
    font-family: "Spectral", serif;
    src: url('https://fonts.googleapis.com/css?family=Spectral')
  }

  *, *:after, *:before {
    font-family: 'Spectral';
    box-sizing: border-box;
    outline: none;
  }

  body {
    background-color: #EEE;
  }
`;

ReactDOM.render(<App />, document.getElementById('root'));
