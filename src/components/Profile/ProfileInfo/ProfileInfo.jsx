import React from 'react';
import classes from './ProfileInfo.module.css';

const ProfileInfo = () => {
    return (
        <div>
            <div>
                <img
                    src="https://www.eligasht.com/Blog/wp-content/uploads/2019/01/23423424-2.jpg"/>
            </div>
            <div className={classes.descriptionBlock}>
                ava + description
            </div>
        </div>
)
}
export default ProfileInfo;