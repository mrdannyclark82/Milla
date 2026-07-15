url: https://raw.githubusercontent.com/mrdannyclark82/Milla-Gem/00b4fc6539267fe8d29b65b188e1ad9d094cbacc/index.tsx


import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const rootElement = document.getElementById('root');
if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
