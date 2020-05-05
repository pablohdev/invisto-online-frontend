import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";

import api from '../../services/api';


import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './style.css'


export default function Directory() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        searchUser()
    }, [])


    async function searchUser() {

        const user = await api.get('/user')

        setUsers(user.data)
    };

    return (
        <div className="container-fluid">
            <Header />
            <main>
                <div className="banner">
                    <div className="acao">
                        <logo><span>invisto</span>.online</logo>
                        <p>Encontre um profissional de investimentos que combina com você</p>
                        <Link to="/list" className='btn-default'>Buscar Profissional de Investimento</Link>
                        <p>É um assessor ou consultor?</p>
                        <button className='btn-default'>Cadastre-se na Plataforma</button>
                    </div>
                    <div className="perfil">
                        <h1>Michael Moskovitz</h1>
                        <a>PRO</a>
                        <h2>Agente Autôno de Investimento</h2>
                        <p>Especializado em Profissionais Autônomos</p>
                    </div>
                </div>

                <div className="buscaPerfil">
                    <h1>Encontre um profissional de investimentos</h1>
                    <p>Milhares de pessoas encontram em um profissional de investimentos a solução perfeita para sua caminhada como investidores</p>
                </div>

                <div className="destaque">
                    <h1>Profissionais em Destaque</h1>

                    {users.map((user) => (
                        <Link to={'profile/' + user.id} key={user.id}>
                            <img src={user.profile_picture} />
                        </Link>
                    ))}


                    <h2>Profissionais por Cidade</h2>
                    <p>
                        <a>São Paulo (SP)</a>
                        <a>Rio de Janeiro (RJ)</a>
                        <a>Minas Gerais (MG)</a>
                        <a>Curitiba (PR)</a>
                        <a>Porto Alegre (RS)</a>
                        <a>Florianópolis (SC)</a>
                        <a>Campinas (SP)</a>
                        <a>Brasília (DF)</a>
                    </p>
                    <p><a>Ver mais Cidades</a></p>

                    <h2>Profissionais por Estado</h2>
                    <p>
                        <a>São Paulo (SP)</a>
                        <a>Rio de Janeiro (RJ)</a>
                        <a>Minas Gerais (MG)</a>
                        <a>Paraná (PR)</a>
                        <a>Rio Grande do Sul (RS)</a>
                        <a>Santa Catarina (SC)</a>
                    </p>
                    <p><a>Ver mais Estados</a></p>

                    <h2>Profissionais por Especialidades</h2>
                    <p>
                        <a>Médicos</a>
                        <a>Advogados</a>
                        <a>Empresários</a>
                        <a>Funcionários Públicos</a>
                        <a>Funcionários Privados</a>
                        <a>Agropecuários</a>
                    </p>
                    <p><a>Ver mais Especialidades</a></p>

                </div>
            </main>
            <Footer />
        </div>
    )
}