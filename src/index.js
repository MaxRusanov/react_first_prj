import ReactDOM from "react-dom";
import App from "./App";
import './index.css';
import store from "./redux/store";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";

// debugger;


// const rerenderEntireTree = () => {
//   // debugger;
//   ReactDOM.render(
//     <BrowserRouter>
//       <Provider store={store} >
//         {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
//         <App />
//       </Provider>
//     </BrowserRouter>, document.getElementById('root')
//   );
// }

// Для первого рендеринга UI
// rerenderEntireTree(store.getState());
// rerenderEntireTree();


// Обновления перерисовка UI, если изменились данные в BLL
// store.subscribe(() => {
//   let state = store.getState();
//   rerenderEntireTree(state);
// });
// store.subscribe(() => {
//   rerenderEntireTree();
// });


  ReactDOM.render(
    <BrowserRouter>
      <Provider store={store} >
        {/*<App state={state} dispatch={store.dispatch.bind(store)} store={store} />*/}
        <App />
      </Provider>
    </BrowserRouter>, document.getElementById('root')
  );
