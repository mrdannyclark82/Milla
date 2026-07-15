url: https://raw.githubusercontent.com/mrdannyclark82/Elara2.0/b1d507e0c56254cfa45cf76c4fa0cfeceb825e31/index.tsx

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