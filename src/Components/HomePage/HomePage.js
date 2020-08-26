import React, { Component } from 'react';
import './HomePage.css';
import NavBar from './NavBar/NavBar';
import FirstHeader from './FirstHeader/FirstHeader';
import SecondHeader from './SecondHeader/SecondHeader';
import ThirdHeader from './ThirdHeader/ThirdHeader';
import FourthHeader from './FourthHeader/FourthHeader';
import FifthHeader from './FifthHeader/FifthHeader';

class HomePage extends Component{

    render() {
        
        return (
            <div className = "homepage">
              <NavBar scroll = {501}/>
              <FirstHeader/>
              <SecondHeader />
              <ThirdHeader />
              <FourthHeader />
              <FifthHeader />
            </div>
        )
    }
}

export default HomePage
