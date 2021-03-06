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

export function PersonalPage({ match }) {

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
                                <p>{users.description}</p>
                            </div>
                            <div className="profile__content__details">
                                <h4>Background</h4>
                                <div id="professional_background" className="profile__content__details__background">
                                    {users.background}
                                </div>
                                <h4>Especialização</h4>
                                <h4 id="professional_specialization"> {users.specialization}</h4>
                                <Link to={`/lead/${users.id}`} id="professional_contact" className="btn-default">Entre em Contato</Link>
                            </div>
                            <div className="profile__content__links">
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