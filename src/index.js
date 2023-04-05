import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { ToggleColorMode } from 'components/ToggleColorMode/ToggleColorMode';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToggleColorMode />
  </React.StrictMode>
);