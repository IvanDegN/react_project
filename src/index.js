
import './index.css';
import reportWebVitals from './reportWebVitals';
import store from "./Redux/state";
import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


const root = ReactDOM.createRoot(document.getElementById('root'));
 let rerender = (state) =>
{

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state}
                     addPost={store.addPost.bind(store)}
                     UpdateNewPostText={store.UpdateNewPostText.bind(store)}
                     addMessage={store.addMessage.bind(store)}
                     UpdateNewMessageText={store.UpdateNewMessageText.bind(store)}/>
            </BrowserRouter>
        </React.StrictMode>
    );
}



rerender(store.getState());
store.subscribe(rerender);
reportWebVitals();
