import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return(
        <div className={s.item}>
            <img className='ava' src='https://hub.awery.com/api/icon/users/1'/>
            <div>
                <span>{props.name}</span>
                <span>like</span>
            </div>
        </div>
    );
};

export default Post;