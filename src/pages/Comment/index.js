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

export function Comment({ match }) {

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

                            <div className="profile__content__comments">
                                <h4>Comentários de Clientes</h4>
                                <div className="comment">
                                    <p className="comment_content">Sou assessorado pelo Michael há 3 anos e posso dizer que aprendi bastante durante esta jornada. Seu trabalho é completamente centrado no cliente e na sua evolução como investidor. Fui salvo de realizar grandes besteiras financeiras ao longo do nosso relacionamento e o agradeço muito por isso. Recomendo a todos que precisarem de um profissional sério.</p>
                                    <h4 className="comment_author">Jorge Mendonça</h4>
                                </div>
                                <div className="comment">
                                    <p className="comment_content">Confiei a custódia da minha conta da corretora ao Michael e não me arrependo nem um pouco. Michael cuida do meu dinheiro como se fosse o seu próprio, me explicando todos os detalhes e fornecendo relatórios detalhados da performance. </p>
                                    <h4 className="comment_author">Douglas Mateo</h4>
                                </div>
                                <Link to='#'>Mais Comentários</Link>
                                <Link to='#'>Inserir Novo Comentário</Link>
                            </div>

                            <div className="profile__content__links">
                                <Link to={`/profile/${users.id}`}><BsFillBriefcaseFill /> Seja Cliente</Link>
                                <Link to={`/lead/${users.id}`}><FaComment /> Entrar em contato</Link>
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