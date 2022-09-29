import React from 'react';
import { NavLink } from 'react-router-dom';

const NAVLINK = [
    { content: "테디베어뮤지엄", link: "/musium" },
    { content: "지점안내", link: "/place" },
    { content: "공지 & 이벤트", link: "/event" },
    { content: "기프트샵", link: "/gift" },
    { content: "문의하기", link: "/qna" },
]
const Nav = () => {
    return (
        <ul>
            {
                NAVLINK.map((it, idx) => {
                    return (
                        <li key={idx}><NavLink to={it.link}>{it.content}</NavLink></li>
                    )
                })
            }
        </ul>
    )
}

export default Nav;