import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from './styles';
import App from './components/App';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <Global styles={GlobalStyles} />
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);
// basename="/campers-for-rent"