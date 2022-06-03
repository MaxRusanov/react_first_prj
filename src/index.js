import React from 'react';
import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  );