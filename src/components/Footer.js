import React from 'react';
import { Link } from "react-router-dom";

import logo2 from '../static/logo2.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="pre-footer">
                <a href="#"><img className="pre-footer__logo" alt="logo" src={logo2}></img></a>
                <span className="pre-footer__slogan">conectando os pontos por você</span>
                <div className="pre-footer__social">
                    <a href="#"><FaFacebookF /></a>
                    <a href="#"><FaTwitter /></a>
                    <a href="#"><FaYoutube /></a>
                    <a href="#"><FaInstagram /></a>
                </div>
            </div>
            <div className="footer">
                <span>Copyright 2019-2020</span>
                <span className="divider">|</span>
                <span>Todos os Direitos Reservados</span>
            </div>
        </footer>
    )
}