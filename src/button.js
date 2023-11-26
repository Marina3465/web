import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Log_in from './components/Auth/Log_in';
import Auth from './components/Auth/Auth';
import { useNavigate } from 'react-router-dom';
import ReactDOM from 'react-dom/client';
import { useState } from "react";


export class button extends Component {
    
    state = {
        form: "login",
      };
    render() {

        return (

            <div>
                {this.state.form === "login" ? <Log_in /> : <Auth />}
                {this.state.form === "login" ? (
                    <a href='#' onClick={() => this.setState((s) => ({ ...s, form: "register" }))}>register</a>
                ):
                (<a
                    href="#"
                    onClick={() => this.setState((s) => ({ ...s, form: "login" }))}
                  >log in</a>)}
                
            
               
            </div>
        )
    }
}

export default button