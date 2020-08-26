import React, { Component } from 'react';
import check from '../../../Assets/Images/check.svg';
import vector_smart from '../../../Assets/Images/vector-smart-object.png';
import './FirstHeader.css';

class FirstHeader extends Component {

    render() {
        return (
                <section className="Header">
                    <header className="app-container">
                        <div className="Header-content">
                            <h1 className="Header-title">
                                <div>
                                Smart Apps
                                </div>
                                For Smart Life!
                            </h1>
                            <p className="Header-copy">From proposal to payment, LOGO takes the headache out of freelancing, so you can get back to the work that drives you.</p>
                            <div className="Header-form-wrapper">
                                <form action="app/signup" className="Header-form SignupForm" id="headerSignUpForm">
                                    <input className="Header-form-input" name="username" placeholder="Your Email" required type="email" />
                                    <button className="Header-form-button" type="submit">
                                        Sign Up for Free!
                                    </button>
                                </form>
                                <p className="NoHassle">
                                
                                    <span>
                                        <img src = {check} alt = "check" />
                                        <span>No credit card</span>
                                        <img src = {check} alt = "check" />
                                        <span>No spam</span>
                                        <img src = {check} alt = "check" />
                                        <span>No hassle</span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className="Header-image">
                            <img src = {vector_smart} alt ="vector_smart" />
                        </div>
                    </header>
                </section>
        )
    }
}

export default FirstHeader
