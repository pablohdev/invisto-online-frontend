import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import api from '../../services/api';

import Header from '../../components/Header';
import Footer from '../../components/Footer';


import { FiMessageSquare, FiSearch } from 'react-icons/fi';

import './style.css'


export default function Profile() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        searchUser()
    }, [])


    async function searchUser() {

        const user = await api.get('/user')

        setUsers(user.data)
    };

    return (
        <>
            <Header />
            <div className="container">
                <main>
                    <div className="busca">
                        <p>
                            <a>Profissionais de Investimento</a>
                            <b>></b>
                            <a>Sâo Paulo (SP)</a>
                            <b>></b>
                            <a>São Paulo (SP)</a>
                        </p>
                        <form>
                            <input placeholder="Especialidade do Profissional     |      Localização do Profissional"></input>
                            <div className="icoSearch"><FiSearch /></div>
                        </form>
                    </div>
                    <div className="resultado">

                        <h1>Profissionais de Investimento Disponíveis</h1>
                        <p>Estes foram os profissionais encontrados pela sua busca</p>

                        <table>
                            <tr>
                                <th><b>Tipo de Profissional</b></th>
                                <td><a>Consultor</a></td>
                                <td><a>Asessor</a></td>
                            </tr>

                            <tr>
                                <th><b>Especialidade</b></th>
                                <td><a>Autônomos</a></td>
                                <td><a>Médicos</a></td>
                                <td className="responsivo"><a>Advogados</a></td>
                                <td className="responsivo"><a>Agropecuária</a></td>
                                <td><a>+</a></td>
                            </tr>


                        </table>

                        {users.map(user => (
                            <div className="profile">
                                <div className="imgPerfil">
                                    <img src={user.profile_picture} alt="Foto do perfil" />
                                </div>
                                <div className="descricao">
                                    <h1>{user.name}</h1>
                                    <h2>Consultor de Investimentos</h2>
                                    <p>Especialista em Profissionais Autônomos</p>
                                    <p><FiMessageSquare color="rgb(44, 44, 44)" /> {Math.ceil(Math.random() * 50)} Avaliações de Clientes</p>
                                    <a>PRO</a>
                                </div>
                            </div>
                        ))}







                        <div className="paginacao">
                            <a>1</a>
                            <p>2</p>
                            <p>3</p>
                        </div>

                        <div className="cadastro">
                            <p>É um assessor ou consultor?</p>
                            <button className="btn-default">Cadastre-se Gratuitamente</button>
                        </div>
                    </div>



                </main>
            </div>
            <Footer />
        </>

    )
}