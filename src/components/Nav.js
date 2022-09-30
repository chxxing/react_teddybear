import React from 'react';
import { NavLink } from 'react-router-dom';

const Nav = ({ navcon }) => {
    return (
        <ul>
            {
                navcon.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.title}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default Nav;