import React from 'react';
import ReactDOM from 'react-dom/client';

import Home from './components/Home.jsx';
import '../styles/index.css'
import './main.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>
);
