// Import React to build our components
import React from 'react';
// Import the new ReactDOM client API for rendering (React 18+)
import ReactDOM from 'react-dom/client';
// Import our main App component
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our App inside StrictMode to help catch potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
