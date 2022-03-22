import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { InputValueProvider } from "./context/InputValueContext";

ReactDOM.render(
  <React.StrictMode>
  <InputValueProvider>
    <App />
  </InputValueProvider>
</React.StrictMode>,
document.getElementById("root")
);


