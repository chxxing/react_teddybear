import { useState } from 'react';
import { Link } from 'react-router-dom';
import { CgSearch, CgGlobeAlt } from "react-icons/cg";
import Nav from './Nav';
import Search from './Search';
import '../css/Header.scss';

const Header = ({ content }) => {
    const [on, setOn] = useState(false);
    return (
        <header className="Header">
            <div className="gnb inner">
                <h1>
                    <Link to='/'>
                        <img src={process.env.PUBLIC_URL + '/assets/images/logo.png'} alt="logo" />
                    </Link>
                </h1>
                <nav>
                    <Nav navcon={content} />
                </nav>
                <ul className='icon'>
                    <li onClick={() => setOn(!on)}><CgSearch /></li>
                    <li><CgGlobeAlt /></li>
                </ul>
            </div>
            <div className={`searchBox ${on ? 'on' : ""}`}>
                <Search />
            </div>
        </header>
    )
}

export default Header;