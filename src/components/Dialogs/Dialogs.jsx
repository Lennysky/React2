import React from "react";
import classes from './Dialogs.module.css';
import {NavLink} from "react-router-dom";


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    <NavLink to="/dialogs1">Dimych</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs2">Andrey</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs3">Elena</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs4">Sasha</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs5">Victor</NavLink>
                </div>
                <div className={classes.dialog}>
                    <NavLink to="/dialogs6">Valera</NavLink>
                </div>
            </div>
            <div className={classes.messages}>
                <div className={classes.message}>Hi, you're awesome!</div>
                <div className={classes.message}>I love you</div>
                <div className={classes.message}>You're perfect!</div>
            </div>

        </div>
    )
}

export default Dialogs;