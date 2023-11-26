import React, { Component } from 'react';
import { Link } from 'react-router-dom';

function Home() {
    {
        return (
            <div>
                <div>Home</div>
                <Link to="/login">Войти</Link>
            </div>
        )
    }
}

export default Home