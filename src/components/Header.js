import React from 'react';
import { CgSearch, CgGlobeAlt } from "react-icons/cg";
import { Link } from 'react-router-dom';
import Nav from './Nav';
import '../css/Header.scss';

const Header = () => {
    return (
        <header className="Header">
            <div className="gnb inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="" />
                    </Link>
                </h1>
                <nav>
                    <Nav />
                </nav>
                <ul className='icon'>
                    <li><CgSearch /></li>
                    <li><CgGlobeAlt /></li>
                </ul>
            </div>
        </header>
    )
}

export default Header;