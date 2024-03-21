import './index.css';
import App from './App';
import React from 'react';
import * as ReactDOM from 'react-dom/client';

const rootElement = document.querySelector("#react-root");
const root = ReactDOM.createRoot(rootElement);
root.render (<App />);
