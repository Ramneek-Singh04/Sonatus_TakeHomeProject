// Import React to build our components
import React from 'react';
// Import the new ReactDOM client API for rendering (React 18+)
import ReactDOM from 'react-dom/client';
// Import our main App component
import App from './App';
// If you have global styles, you can import them here
// import './index.css';

// Get the root element from our HTML where our app will live
const root = ReactDOM.createRoot(document.getElementById('root'));

// Render our App inside StrictMode to help catch potential issues
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
