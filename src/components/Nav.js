import React from 'react';
import { Link } from 'react-router-dom';

const Nav = () => {
    return (
        <ul>
            <li><Link to='/'>테디베어뮤지엄</Link></li>
            <li><Link to='/'>지점안내</Link></li>
            <li><Link to='/'>공지&amp;이벤트</Link></li>
            <li><Link to='/'>기프트샵</Link></li>
            <li><Link to='/'>문의하기</Link></li>
        </ul>
    )
}

export default Nav;