
import './index.css';
import reportWebVitals from './reportWebVitals';
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import store from './Redux/ReduxStore'


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerender = (state) =>
{
    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     dispatch={store.dispatch.bind(store)}
                     />
            </BrowserRouter>
        </React.StrictMode>
    );
}



rerender(store.getState());
store.subscribe(() =>
{
    let state = store.getState();
    rerender(state)
});
reportWebVitals();
