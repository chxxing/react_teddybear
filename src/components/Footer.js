import React from 'react';
import { CgFacebook, CgInstagram } from "react-icons/cg";
import '../css/Footer.scss';

const Footer = ({ content }) => {
    return (
        <footer className="Footer">
            <div className="inner">
                <div className="box">
                    <ul>
                        <li>{content.name}</li>
                        <li>{content.number}</li>
                        <li>{content.ceo}</li>
                        <li>{content.address}</li>
                    </ul>
                    <strong>Copyright &copy; {content.copy}</strong>
                </div>
                <div className="snsIcon">
                    <CgFacebook />
                    <CgInstagram />
                </div>
            </div>
        </footer>
    )
}

export default Footer;