import React from 'react';
import ReactDOM from 'react-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import './index.css';
import App from './App';
import {Provider} from "react-redux"
import Store from "./redux/Store"

ReactDOM.render(
  <React.StrictMode>
      <Provider store = {Store}>
        <App />
      </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);