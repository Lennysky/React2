import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem id={d.id} name={d.name}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    let newElement = React.createRef();

    let addMessage = () => {
        let text = newElement.current.value;
        alert(text);
    }

    return (
        <div className={classes.dialogs}>
                        <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea ref = {newElement}>

           </textarea>
            </div>
            <div>
                <button onClick={addMessage}>Add message</button>
            </div>
        </div>
    )
}

export default Dialogs;