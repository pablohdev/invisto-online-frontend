import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";



import '../style.css'




function LeadDetails() {
    return (
        <div className="profile__content">
            <div className="profile__container">
                <div className="profile">
                    <div className="profile__image">
                        <div className="profile__image-regular">
                            <img src={users.cover_picture}></img>
                        </div>
                        <div className="profile__image-small">
                            <img src={users.profile_picture}></img>
                        </div>
                    </div>
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
                    <Link to="#"><BsFillBriefcaseFill /> Seja Cliente</Link>
                    <Link to="/comments"><FaComment /> Comentários dos Clientes</Link>
                    <Link to="#"><FaHome /> Página do Escritório</Link>
                    <Link to="/profile"><FaUser /> Página Pessoal</Link>
                </div>
            </div>
        </div>
    );
}
function CommentsDetails() {
    return (
        <div className="profile__content">
            <div className="profile__container">
                <ProfileBasicInfo />
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
                    <Link to="#"><BsFillBriefcaseFill /> Seja Cliente</Link>
                    <Link to="#"><FaHome /> Página do Escritório</Link>
                    <Link to="/profile"><FaUser /> Página Pessoal</Link>
                </div>
            </div>
        </div>
    );
}


export function Lead() {
    return (
        <main>
            <div className="profile">

                <LeadDetails />
            </div>
        </main>
    )
}
export function Comments() {
    return (
        <main>
            <div className="profile">
                <CommentsDetails />
            </div>
        </main>
    )
}