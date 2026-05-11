import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import { ThemeProvider, StyledEngineProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import theme from "assets/theme";
import App from "./App";
import store from "store";
import reportWebVitals from "reportWebVitals";
import { BrowserRouter as Router } from "react-router-dom";
import TourWrapper from "components/TourWrapper";
import MetaMaskErrorBoundary from "components/ErrorBoundary/MetaMaskErrorBoundary";

const persistor = persistStore(store);

// Global error handler to suppress MetaMask connection errors
// This prevents MetaMask errors from blocking the application
window.addEventListener('error', (event) => {
  // Suppress MetaMask-related errors
  const errorMessage = event.message || (event.error && event.error.message) || '';
  const errorSource = event.filename || (event.error && event.error.stack) || '';
  
  if (
    errorMessage.includes('MetaMask') ||
    errorMessage.includes('Failed to connect to MetaMask') ||
    errorMessage.includes('MetaMask extension not found') ||
    errorSource.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
    errorSource.includes('inpage.js')
  ) {
    event.preventDefault();
    event.stopPropagation();
    console.warn('MetaMask connection error suppressed:', errorMessage);
    return false;
  }
}, true); // Use capture phase to catch errors earlier

// Handle unhandled promise rejections (MetaMask errors often come as promise rejections)
window.addEventListener('unhandledrejection', function(event) {
  // Suppress MetaMask-related promise rejections
  const reason = event.reason;
  const errorMessage = (reason && reason.message) || (reason && reason.toString()) || '';
  const errorStack = (reason && reason.stack) || '';
  
  if (
    errorMessage.includes('MetaMask') ||
    errorMessage.includes('Failed to connect to MetaMask') ||
    errorMessage.includes('MetaMask extension not found') ||
    errorStack.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
    errorStack.includes('inpage.js') ||
    (typeof reason === 'string' && reason.includes('MetaMask'))
  ) {
    event.preventDefault();
    console.warn('MetaMask promise rejection suppressed:', errorMessage);
  }
});

ReactDOM.render(
  <React.StrictMode>
    <MetaMaskErrorBoundary>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <ThemeProvider theme={theme}>
            <StyledEngineProvider injectFirst>
              <CssBaseline />
              <Router>
                <TourWrapper>
                  <App />
                </TourWrapper>
              </Router>
            </StyledEngineProvider>
          </ThemeProvider>
        </PersistGate>
      </Provider>
    </MetaMaskErrorBoundary>
  </React.StrictMode>,
  document.getElementById("root")
);

reportWebVitals();
