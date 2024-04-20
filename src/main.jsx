import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { Global, ThemeProvider } from '@emotion/react';
import { GlobalStyles, theme } from './styles';
import App from './components/App';
import { persistor, store } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from './components/Loader/Loader';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <Global styles={GlobalStyles} />

        <PersistGate loading={<Loader/>} persistor={persistor}>
          <BrowserRouter basename="/campers-for-rent/">
            <App />
          </BrowserRouter>
        </PersistGate>
      </ThemeProvider>
    </Provider>
  // </React.StrictMode>
);
