import React from 'react';
import { CgFacebook, CgInstagram, CgWebsite } from "react-icons/cg";
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
                    <a href="https://www.facebook.com/tbmsince2001" target='_blank'><CgFacebook /></a>
                    <a href="https://www.instagram.com/teddybearmuseum/" target='_blank'><CgInstagram /></a>
                    <a href="https://blog.naver.com/teddybear_jsnf" target='_blank'><CgWebsite /></a>
                </div>
            </div>
        </footer >
    )
}

export default Footer;