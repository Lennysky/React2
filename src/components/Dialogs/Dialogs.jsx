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

    let dialogsData = [
        {id: 1, name: 'Dimych'},
        {id: 2, name: 'Andrey'},
        {id: 3, name: 'Elena'},
        {id: 4, name: 'Sasha'},
        {id: 5, name: 'Victor'},
        {id: 6, name: 'Valera'}
    ]

    let messagesData = [
        {id: 1, message: "Hi, you are awesome!"},
        {id: 2, message: "I love you"},
        {id: 3, message: "You are perfect!"},
        {id: 4, message: "You are clever!"},
        {id: 5, message: "You are good backend-developer!"},
        {id: 6, message: "You've made great bot!"}
    ]

    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name={dialogsData[0].name} id={dialogsData[0].id}/>
                <DialogItem name={dialogsData[1].name} id={dialogsData[1].id}/>
                <DialogItem name='Andrey' id="2"/>
                <DialogItem name='Elena' id="3"/>
                <DialogItem name='Sasha' id="4"/>
                <DialogItem name='Victor' id="5"/>
                <DialogItem name='Valera' id="6"/>
            </div>
            <div className={classes.messages}>
                <Message message = {messagesData[0].message}/>
                <Message message = {messagesData[1].message}/>
                <Message message = "I love you"/>
                <Message message = "You are perfect!"/>
            </div>

        </div>
    )
}

export default Dialogs;