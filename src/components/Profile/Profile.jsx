import React from 'react';
import classes from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
return  <div className={classes.content}>
    <div>
        <img
            src="https://scontent-arn2-1.xx.fbcdn.net/v/t39.30808-6/239489715_185430020229103_1031080278538849592_n.jpg?_nc_cat=104&ccb=1-5&_nc_sid=e3f864&_nc_ohc=gTVCU0JWgWQAX-uji74&_nc_oc=AQnVzrKQsg5IMqErR8PGCGhKD3dH2pjkcSWUpnDHZrLDoJpomy0KfLeS8pTSJWIYzhU&_nc_ht=scontent-arn2-1.xx&oh=fb79db3a9e3bc9bc898c474988015712&oe=61A94FFE"/>
    </div>
    <div>
        ava + description
        </div>
    <MyPosts hey = "yo!" />
</div>
}

export default Profile;