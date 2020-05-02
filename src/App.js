import React from 'react';
import { Link } from "react-router-dom";



export default function App() {
    return (
        <div className="container">
            <h1>Home</h1>
            <Link to="/" className='btn-default'>Home</Link>
            <Link to="/profile" className='btn-default'>Profile</Link>
            <Link to="/directory" className='btn-default'>Directory</Link>
        </div>
    )
}