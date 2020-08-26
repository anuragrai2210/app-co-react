import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import logo from '../../../Assets/Images/logo.svg';
import chevron from '../../../Assets/Images/chevron-down.svg';
import './NavBar.css';

class NavBar extends Component{

    state = {
        isHovered: false,
        isTop: false
    }

    handleHover = () =>{
        this.setState(prevState => ({
            isHovered: !prevState.isHovered})
        )
    };

    handleScroll =(isTop) =>{
        this.setState({isTop})
    }

    componentDidMount() {
        document.addEventListener('scroll', () => {
          const isTop = (window.scrollY > this.props.scroll);
          if (isTop !== this.state.isTop) {
            this.handleScroll(isTop);
          }
        });
    }

    componentWillUnmount() {
        document.removeEventListener('scroll', this.handleScroll);
    }

    render(){
        const scroll = this.state.isTop ? "Nav Nav--sticky" : "Nav";
        const btnClass = this.state.isHovered ? "Nav-link Nav-link--suite u-reset-button is-active" : "Nav-link Nav-link--suite u-reset-button";
        return (
            <nav className= {scroll} onScroll = {this.handleScroll}>
                    <div className="Nav-top">
                        <Link to = "/app/main" className = "Nav-top-logo">
                            <img src = {logo} alt = "Logo" />
                        </Link>
                    </div>    
                    <ul className="Nav-mainMenu u-reset-ul">
                        <li className="Nav-Submenu">
                            <button className={btnClass} onMouseEnter={this.handleHover} onMouseLeave={this.handleHover}>
                                <span>
                                    Services We Offer <img src = {chevron} alt = "chevron" />
                                </span>
                            </button> 
                            <ul className="Nav-featuresMenu u-reset-ul">
                                <li>
                                <Link to = "app/invoicing"  style={{textDecoration: "none"}} className="Nav-link" >Invoicing</Link>
                                </li><li>
                                <Link to = "app/invoicing"  style={{textDecoration: "none"}} className="Nav-link" >Invoicing</Link>
                                </li>
                                <li>
                                <Link to = "app/invoicing"  style={{textDecoration: "none"}} className="Nav-link" >Invoicing</Link>
                                </li>
                                <li>
                                <Link to = "app/invoicing"  style={{textDecoration: "none"}} className="Nav-link" >Invoicing</Link>
                                </li>
                                <li>
                                <Link to = "app/invoicing" style={{textDecoration: "none"}} className="Nav-link" >Invoicing</Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                        <Link className="Nav-link Nav-link--bordered" style={{textDecoration: "none"}} to="app/pricing">Pricing</Link>
                        </li>
                        <li>
                        <Link className="Nav-link Nav-link--bordered" style={{textDecoration: "none"}} to="app/reviews">Reviews</Link>
                        </li>
                        <li>
                        <Link className="Nav-link Nav-link--bordered" style={{textDecoration: "none"}} to="app/About">About</Link>
                        </li>
                        <li className="u-m-r-0">
                        <Link className="Nav-link Nav-link--bordered" style={{textDecoration: "none"}} to="app/gopro">Go PRO</Link>
                        </li>
                    </ul>
                    <ul className="Nav-webApp u-reset-ul">
                        <li>
                        <Link className="Nav-webApp-link Nav-webApp-link--signUp Nav-signUpButton signupLink" style={{textDecoration: "none"}} to="app/signup">
                            {this.state.isTop ? <span>Sign up for free</span> : <span>Have an account? </span> }
                        </Link>
                        </li>
                        <li>
                        <Link className="Nav-webApp-link Nav-webApp-link--signIn Nav-signInButton" style={{textDecoration: "none"}} to="app/login">
                            Log In
                        </Link>
                        </li>
                    </ul>
                </nav>
        )
    }
}

export default NavBar
