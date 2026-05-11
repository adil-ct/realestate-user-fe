import React from 'react';

class MetaMaskErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    // Check if error is MetaMask-related
    const errorMessage = error?.message || error?.toString() || '';
    const errorStack = error?.stack || '';
    
    if (
      errorMessage.includes('MetaMask') ||
      errorMessage.includes('Failed to connect to MetaMask') ||
      errorMessage.includes('MetaMask extension not found') ||
      errorStack.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
      errorStack.includes('inpage.js')
    ) {
      // Suppress MetaMask errors - don't show error boundary UI
      return { hasError: false };
    }
    
    // For other errors, let them propagate
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // Check if error is MetaMask-related
    const errorMessage = error?.message || error?.toString() || '';
    const errorStack = error?.stack || '';
    
    if (
      errorMessage.includes('MetaMask') ||
      errorMessage.includes('Failed to connect to MetaMask') ||
      errorMessage.includes('MetaMask extension not found') ||
      errorStack.includes('chrome-extension://nkbihfbeogaeaoehlefnkodbefgpgknn') ||
      errorStack.includes('inpage.js')
    ) {
      // Log but don't show error UI
      console.warn('MetaMask error caught by ErrorBoundary (suppressed):', errorMessage);
      return;
    }
    
    // Log other errors normally
    console.error('Error caught by ErrorBoundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Only show error UI for non-MetaMask errors
      return (
        <div style={{ padding: '20px', textAlign: 'center' }}>
          <h2>Something went wrong.</h2>
          <p>Please refresh the page.</p>
        </div>
      );
    }

    return this.props.children;
  }
}

export default MetaMaskErrorBoundary;
