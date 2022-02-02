import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import DialogItem from "./components/Dialogs/DialogItem/DialogItem";
import Message from "./components/Dialogs/Message/Message";


let dialogs = [
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Elena'},
    {id: 4, name: 'Sasha'},
    {id: 5, name: 'Victor'},
    {id: 6, name: 'Valera'}
]

let messages = [
    {id: 1, message: "Hi, you are awesome!"},
    {id: 2, message: "I love you"},
    {id: 3, message: "You are perfect!"},
    {id: 4, message: "You are clever!"},
    {id: 5, message: "You are good backend-developer!"},
    {id: 6, message: "You've made great bot!"}
]

/*let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
let messagesElements = messages.map ( m => <Message message = {m.message}/>);*/



let posts = [
    {id: 1, message: 'Hi, how are you?', likesCount: 15},
    {id: 2, message: 'It is my first post', likesCount: 20}

]

ReactDOM.render(
  <React.StrictMode>
    <App dialogs = {dialogs} messages = {messages} posts = {posts}/>
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
