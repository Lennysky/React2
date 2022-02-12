import React from "react";
import classes from './../Dialogs.module.css';

const Message = (props) => {
    return (

        <div className={classes.message}>
            <img
                src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXeIuKElSOTid6MF787c7UTMwFPgQa7oF1ew&usqp=CAU'/>
            {props.message}
        </div>
    )
}

export default Message;