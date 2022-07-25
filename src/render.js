import ReactDOM from "react-dom/client";
import React from "react";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {addPost, UpdateNewPostText} from "./Redux/state";

const root = ReactDOM.createRoot(document.getElementById('root'));
export let rerender = (state) =>
{

    root.render(
        <React.StrictMode>
            <BrowserRouter>
                <App state={state} addPost={addPost} UpdateNewPostText={UpdateNewPostText}  />
            </BrowserRouter>
        </React.StrictMode>
    );
}
