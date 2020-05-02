import React from 'react';
import { Link } from "react-router-dom";

import logo2 from '../static/logo2.png';
import { FaFacebookF, FaTwitter, FaYoutube, FaInstagram } from "react-icons/fa";

export default function Footer() {
    return (
        <footer>
            <div className="pre-footer">
                <Link to="/"><img className="pre-footer__logo" alt="logo" src={logo2}></img></Link>
                <span className="pre-footer__slogan">conectando os pontos por você</span>
                <div className="pre-footer__social">
                    <Link to="#"><FaFacebookF /></Link>
                    <Link to="#"><FaTwitter /></Link>
                    <Link to="#"><FaYoutube /></Link>
                    <Link to="#"><FaInstagram /></Link>
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