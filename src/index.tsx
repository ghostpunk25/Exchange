import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToggleColorMode } from './components/ToggleColorMode/ToggleColorMode';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);
