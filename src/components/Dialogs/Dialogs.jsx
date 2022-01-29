import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";



const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;

    return (
        <div className={classes.dialog + ' ' + classes.active}>
            <NavLink to= {path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={classes.message}>{props.message}</div>
    )
}

const Dialogs = (props) => {

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

    let dialogsElements = dialogs.map( d => <DialogItem id={d.id} name={d.name} />);
    let messagesElements = messages.map ( m => <Message message = {m.message}/>);

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;