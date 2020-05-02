import React from 'react';
import { Link } from "react-router-dom";

import logo from '../static/logo.png';
import { FaSearch, FaUser } from "react-icons/fa";

import './style.css'

export default function Header() {
    return (
        <header>
            <div className="header">
                <div className="header__menu">
                    <Link to='/' className="header__logo"><img alt="logo" src={logo}></img></Link>
                    <div className="header__search">
                        <input type="text" placeholder="Pesquisar no Invisto Online"></input>
                        <FaSearch />
                    </div>
                </div>
                <div className="header__control_panel">
                    <Link to='#' className="header__professional_area">Área do Profissional</Link>
                </div>
                <div className="header__expandable">
                    <FaUser />
                </div>
            </div>
        </header>
    )
}