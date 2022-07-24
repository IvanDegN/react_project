import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


let dialogInfo =
    [
        {id:1, name: 'Ivan'},
        {id:2, name: 'Sveta'},
        {id:3, name: 'Valera'},
        {id:4, name: 'Peter'},
        {id:5, name: 'Sonya'}
    ]

let messages =
    [
        {id:1, message: 'Hi'},
        {id:2, message: 'How are you?'},
        {id:3, message: 'I seem it looks strange'},
        {id:4, message: 'He has a cat'},
        {id:5, message: 'She has a car'},
    ]

let post =
    [
        {id:1, text:'Hi', likesCount:10},
        {id:2, text:'How are you?', likesCount:10},
        {id:3, text:'She has a dog', likesCount:10},
        {id:4, text:'He always does his work in time', likesCount:10},
        {id:5, text:'She watches TV', likesCount:10}
    ]


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App dialogInfo={dialogInfo} messages={messages} post={post}  />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
