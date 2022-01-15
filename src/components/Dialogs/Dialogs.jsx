import React from "react";
import classes from './Dialogs.module.css';


const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <div className={classes.dialog + ' ' + classes.active}>
                    Dimych
                </div>
                <div className={classes.dialog}>
                    Andrey
                </div>
                <div className={classes.dialog}>
                    Elena
                </div>
                <div className={classes.dialog}>
                    Sasha
                </div>
                <div className={classes.dialog}>
                    Victor
                </div>
                <div className={classes.dialog}>
                    Valera
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