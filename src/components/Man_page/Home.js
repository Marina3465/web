import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

function Home() {
    {
        return (
            <div className='conteiner-home'>
                <div className='conteiner-home-header'>
                    <header>
                        <ul>
                            <li>Последние рецепты</li>
                            <li>Лучшие рецепты</li>
                            <li>Самые быстрые рецепты</li>
                            <li>Фильтры</li>
                        </ul>
                        <form className='form-home-header'>
                            <input type='text' className='search-home' />
                            <button className='search-btn'><img src={require('../../img/search.png')} alt='Занчок поиска' /></button>
                        </form>
                        <Link to="/login" className='user-btn'><img src={require('../../img/user.png')} alt='Пользователь' /></Link>
                    </header>
                </div>
                <div className='home-banner'>
                    <img src={require('../../img/logo.png')} alt='Логотип сайта' />
                </div>
                
            </div>
        )
    }
}

export default Home