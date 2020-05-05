import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { Link } from "react-router-dom";

import profile from '../../static/profile-big.jpg';
import profileSmall from '../../static/profile-small.png';
import { FaComment, FaHome, FaUser } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import api from '../../services/api';

import './style.css'

export function Lead({ match }) {

    const [users, setUsers] = useState([]);

    useEffect(() => {

        const id_user = match.params.id;

        searchUser(id_user)


    }, [])

    async function searchUser(id) {

        const user = await api.get(`/user/${id}`)

        setUsers(user.data)


    };



    return (
        <div>
            <Header />
            <main>
                <div className="profile">
                    <div className="profile__image">
                        <div className="profile__image-regular">
                            <img src={users.cover_picture}></img>
                        </div>
                        <div className="profile__image-small">
                            <img src={users.profile_picture}></img>
                        </div>
                    </div>
                    <div className="profile__content">
                        <div className="profile__container">
                            <div className="profile__content__professional">
                                <h1 id="professional_name">{users.name} <GoVerified size={22} color='#2C96EA' /></h1>
                                <h4 id="professional_class">{users.kind_professional}</h4>
                                <h4 id="professional_company">Monkey Investments</h4>
                            </div>

                            <div className="profile__content__description">
                                <p>Há 15 anos no mercado financeiro, Michael Moskotivz já trabalhou em grandes bancos e agora quer ajudar o investidor pessoa física a fazer seu dinheiro trabalhar.</p>
                            </div>
                            <div className="profile__content__lead">
                                <h4>Preencha Abaixo e Baixe o Material</h4>
                                <input type="text" placeholder="Nome"></input>
                                <input type="text" placeholder="Endereço de Email"></input>
                                <input type="text" placeholder="Telefone de Contato"></input>
                            </div>
                            <div className="profile__content__details">
                                <button id="professional_lead" className="btn-default">Guia de Como Começar a Investir</button>
                            </div>

                            <div className="profile__content__links">
                                <Link to={`/profile/${users.id}`}><BsFillBriefcaseFill /> Seja Cliente</Link>
                                <Link to={`/comments/${users.id}`}><FaComment /> Comentários dos Clientes</Link>
                                <Link to="/"><FaHome /> Página do Escritório</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    )
}