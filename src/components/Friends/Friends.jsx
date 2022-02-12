import React from 'react';
import classes from './Frinends.module.css';
import Friend from "./Friend/Friend";

const Friends = (props) => {


    let friendsElements =
        props.state.friends.map (f => <Friend friend = {f.friend} />);

    return (
       <div>

           {friendsElements}

       </div>
   )
}

export default Friends;