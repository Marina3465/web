import './Auth.css';
import { useForm } from "react-hook-form";
import React, { useState } from 'react';

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye } from "@fortawesome/free-solid-svg-icons";
const eye = <FontAwesomeIcon icon={faEye} />;

function Auth() {
    const { register, handleSubmit, formState: { errors }, reset, watch, getValues } = useForm();
    const onSubmit = (data) => {
        console.log(data);
    }
    const [passwordShown, setPasswordShown] = useState(false);
    const [confirmPasswordShown, setConfPasswordShown] = useState(false);
    const togglePasswordVisiblity = () => {
       
            setPasswordShown(passwordShown ? false : true);
        
      };
      const toggleConfPasswordVisiblity = () =>{
                    setConfPasswordShown(confirmPasswordShown ? false : true);

      }
    return (
        <div className='conteiner'>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='logo-img'>
                    <img src={require('../../img/logo.png')} alt='Логотип сайта' />
                </div>
                <input type="email" placeholder='Почта' {...register("email", {
                    required: true, pattern: /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                })} />
                {errors.email && <p>Не корректный ввод почты</p>}
                <div><input type={passwordShown ? "text" : "password"} placeholder='Пароль' {...register("password", { required: true, pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,30}$/ })} /><i onClick={togglePasswordVisiblity}>{eye}</i></div>
                {errors.password && <p>Пароль должен содержать 1 заглавную букву, 1 цифру и быть не менее 6 символов</p>}
                <div><input type={confirmPasswordShown ? "text" : "password"} placeholder='Повторите пароль'  {...register("confirm_password", {
                    required: true,
                    validate: (val) => {
                        if (watch('password') != val) {
                            return false;
                        }
                    },
                })} /><i onClick={toggleConfPasswordVisiblity}>{eye}</i></div>
                {errors.confirm_password && <p>Пароли не совпадают</p>}
                <input type="submit" value='Зарегистироваться' />
                <a href='#'>Войти</a>
            </form>
        </div>
    );
}
export default Auth;