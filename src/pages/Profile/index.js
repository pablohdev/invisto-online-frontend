import React, { useState, useEffect } from 'react';
import Header from '../../components/Header';
import { Personal, Lead, Comments } from './components/Content';
import Footer from '../../components/Footer';

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
            <Personal user={users} />
            <Footer />
        </div>
    )
}
export function LeadPage() {
    return (
        <div>
            <Header />
            <Lead />
            <Footer />
        </div>
    )
}
export function CommentsPage() {
    return (
        <div>
            <Header />
            <Comments />
            <Footer />
        </div>
    )
}