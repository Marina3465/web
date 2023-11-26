import './Auth-Log.css';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
import { faEyeSlash } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;
const eyeSlah = <FontAwesomeIcon icon={faEyeSlash} />;

function Log_in() {
    const { register, handleSubmit, formState: { errors }, reset, watch, getValues } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }

    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {

        setPasswordShown(passwordShown ? false : true);

    };
    const toggleConfPasswordVisiblity = () => {
        setConfPasswordShown(confirmPasswordShown ? false : true);

    }
    return (

        <div className='conteiner'>
            <div className='conteiner-img'>
                <div className='content'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='logo-img'>
                            <img src={require('../../img/logo.png')} alt='Логотип сайта' />
                        </div>
                        <input type="email" placeholder='Почта' {...register("email", {
                            required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                        })} /><br></br>
                        {errors.email && <p>Не корректный ввод почты</p>}<br></br>

                        <div className='passw-eye'><input type={passwordShown ? "text" : "password"} placeholder='Пароль' {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/ })} /><i onClick={togglePasswordVisiblity}>{passwordShown ? eyeSlah : eye}</i></div><br></br>
                        {errors.password && <p>Пароль должен содержать 1 заглавную букву, 1 цифру и быть не менее 6 символов</p>}<br></br>



                        <input type="submit" value='Войти' /><br></br>
                        <Link to="/auth">Зарегистрироваться</Link>

                    </form>
                </div>
            </div>
        </div>
    );
}
export default Log_in;