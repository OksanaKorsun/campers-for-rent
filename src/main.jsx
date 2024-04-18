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
      <BrowserRouter basename="/campers-for-rent">
        <App />
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>
);

// Experience the Freedom of the Open Road with Our  Camper Rentals