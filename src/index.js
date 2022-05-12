import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";

// debugger;


const rerenderEntireTree = (state) => {
  // debugger;
  ReactDOM.render(
    <BrowserRouter>
      <App state={state} dispatch={store.dispatch.bind(store)} />
    </BrowserRouter>, document.getElementById('root')
  );
}


rerenderEntireTree(store.getState());

store.subscribe(() => {
  let state = store.getState();
  rerenderEntireTree(state);
});

