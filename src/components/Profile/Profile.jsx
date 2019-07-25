import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

const Profile = () => {
    return(
        <div className={s.content}>
            <div>
                <img src='https://hub.awery.com/api/get_back/1'/>
            </div>
            <div>
                <div>

                </div>
                <div>

                </div>
            </div>
           <MyPosts />
        </div>
    );
};

export default Profile;