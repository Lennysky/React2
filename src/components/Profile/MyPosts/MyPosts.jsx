import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    let postsData = [
        {id: 1, message: 'Hi, how are you?', likesCount: 15},
        {id: 2, message: 'It is my first post', likesCount: 20}

    ]


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
                <Post message = {postsData[0].message} likesCount={postsData[0].likesCount} />
                <Post message = {postsData[1].message} likesCount={postsData[1].likesCount} />

                {props.hey}

            </div>
        </div>
    )
}

export default MyPosts;