import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div className={classes.postsBlock}>
            <h3> My posts </h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>

                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" likesCount='15'/>
                <Post message="It's my first post" likesCount='20'/>
                {props.hey}

            </div>
        </div>
    )
}

export default MyPosts;