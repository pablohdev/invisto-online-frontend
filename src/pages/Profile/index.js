import React from 'react';
import { Link } from "react-router-dom";

import './style.css'


export default function Profile() {
    return (
        <div className="container">
            <h1>Profile</h1>
            <Link to="/" className='btn-default'>Home</Link>
            <Link to="/profile" className='btn-default'>Profile</Link>
            <Link to="/directory" className='btn-default'>Directory</Link>
        </div>
    )
}