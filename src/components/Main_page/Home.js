import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Modal from './Modal';

import './Home.css';

function Home() {
    {
        const num_cart = [1, 2, 3, 4, 5, 6, 7, 8];

        const [showModal, setShowModal] = useState(false);
        return (
            <div className='conteiner-home'>
                <div className='conteiner-home-header'>
                    <header>
                        <ul>
                            <li>Последние рецепты</li>
                            <li>Лучшие рецепты</li>
                            <li>Самые быстрые рецепты</li>
                            <li onClick={() => setShowModal(true)}>Фильтры</li>
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
                <div className='carts'>
                    {num_cart.map(() => (
                        <><div className='cart'>
                            <div className='cart-photo'></div>
                            <div className='cart-content'>
                                <div className='cart-header'>
                                    <h3 className='cart-header-title'>Куриная запеканка</h3>
                                    <p className='cart-header-info'>1000 ккал</p>
                                </div>
                                <div className='cart-text'>
                                    <p className='cart-data'>Фарш куриный, печень куриная, лук, чеснок, яйца, соль, перец чёрный молотый, приправа, хлеб белый, молоко, масло, сыр твёрдый</p>
                                    <p className='cart-user'>Rambutan</p>
                                    <p className='cart-time'>90 мин</p>
                                    <p className='cart-tags'>курица, ужин, духовка, просто</p>
                                </div>
                            </div>
                        </div></>

                    ))}


                </div>

                <div className='load-cats'>Загрузить ещё</div>


                {
                    showModal ? <Modal toggleModal={setShowModal} /> : null
                }

                <div className='home-footer'>
                    <ul className='list-link'>
                        <li className='list-link-vk'><a href='#'></a></li>
                        <li className='list-link-tg'><a href='#'></a></li>
                        <li className='list-link-wt'><a href='#'></a></li>
                    </ul>
                    <h3 className='name-comp'>©️culinaryworld</h3>
                    <ul className='home-footer-phone-email'>
                        <li><a className='home-footer-phone' href='tel:+79000000000'>+7 (900) 000-00-00</a></li>
                        <li><a className='home-footer-email' href='mailto:culinaryworld@mail.ru'>culinaryworld@mail.ru</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default Home