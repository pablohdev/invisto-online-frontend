import React from 'react';
import { Link } from "react-router-dom";

import profile from '../../../static/profile-big.jpg';
import profileSmall from '../../../static/profile-small.png';
import { FaComment, FaHome, FaUser } from "react-icons/fa";
import { BsFillBriefcaseFill } from "react-icons/bs";
import { GoVerified } from "react-icons/go";

import '../style.css'

function ProfileImage() {
    return (
        <div className="profile__image">
            <div className="profile__image-regular">
                <img src={profile}></img>
            </div>
            <div className="profile__image-small">
                <img src={profileSmall}></img>
            </div>
        </div>
    );
}
function ProfileBasicInfo(params) {

    console.log(params.user)

    return (
        <div className="profile__content__professional">
            <h1 id="professional_name">Nome <GoVerified size={22} color='#2C96EA' /></h1>
            <h4 id="professional_class">Agente Autônomo de Investimentos</h4>
            <h4 id="professional_company">Monkey Investments</h4>
        </div>
    );
}
function PersonalDetails() {
    return (
        <div className="profile__content">
            <div className="profile__container">
                <ProfileBasicInfo />
                <div className="profile__content__description">
                    <p>Inserido no mercado financeiro desde o ano de 2005, quando se formou PhD em Economia pela Chicago University, Michael Moskovitz já teve a oportunidade trabalhar em grandes instituições como JP Morgan, Bank of America e HSBC. Há 7 anos, cansado das instituições financeiras privadas, assumiu o desafio de fazer com que o dinheiro do pequeno investidor renda como o dos grandes investidores e o faz com entusiasmo desde então. Seu foco está em sempre educar o cliente durante sua jornada no mundo dos investimentos, do primeiro aporte a aposentadoria.</p>
                </div>
                <div className="profile__content__details">
                    <h4>Background</h4>
                    <div id="professional_background" className="profile__content__details__background">
                        <span>Ações</span>
                        <span>Fundos Imobiliários</span>
                    </div>
                    <h4>Especialização</h4>
                    <h4 id="professional_specialization">Profissionais Autônomos</h4>
                    <button id="professional_contact" className="btn-default">Entre em Contato</button>
                </div>
                <div className="profile__content__links">
                    <Link to="#"><BsFillBriefcaseFill /> Seja Cliente</Link>
                    <Link to="/comments"><FaComment /> Comentários dos Clientes</Link>
                    <Link to="#"><FaHome /> Página do Escritório</Link>
                </div>
            </div>
        </div>
    );
}
function LeadDetails() {
    return (
        <div className="profile__content">
            <div className="profile__container">
                <ProfileBasicInfo />
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

export function Personal(params) {
    return (
        <main>
            <div className="profile">
                <ProfileImage />
                <PersonalDetails user={params} />
            </div>
        </main>
    )
}
export function Lead() {
    return (
        <main>
            <div className="profile">
                <ProfileImage />
                <LeadDetails />
            </div>
        </main>
    )
}
export function Comments() {
    return (
        <main>
            <div className="profile">
                <ProfileImage />
                <CommentsDetails />
            </div>
        </main>
    )
}