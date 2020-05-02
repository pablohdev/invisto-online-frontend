import React from 'react';
import Header from '../../components/Header';
import {Personal, Lead} from './components/Content';
import Footer from '../../components/Footer';

import './style.css'

export function PersonalPage() {
    return (
        <div>
            <Header />
            <Personal />
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