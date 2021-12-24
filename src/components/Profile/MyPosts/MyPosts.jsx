import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    return (
        <div>
            My posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
                <button>Remove</button>
            </div>
            <div className={classes.posts}>
                <Post message="Hi, how are you?" likeCounts='15' />
                <Post message="It's my first post" likeCounts='20' />
                {props.hey}

            </div>
        </div>
    )
}

export default MyPosts;