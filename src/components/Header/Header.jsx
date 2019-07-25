import React from 'react';
import s from './Header.module.css';

const Header = () => {
    return(
        <header className={s.header}>
            <img src='https://hub.awery.com/api/icon/default_dashboard/img_logo'/>
        </header>
    );
};

export default Header;