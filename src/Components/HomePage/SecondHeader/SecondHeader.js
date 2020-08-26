import React, { Component } from 'react';
import './SecondHeader.css';
import SlideShow from '../Slider/SlideShow';

class SecondHeader extends Component{

    render(){
        return (
            <section className="Features">
                <h2 className="Features-title">
                    Smart, seamless freelancer tools to build, manage, and grow your business.
                </h2>
                <SlideShow />
            </section>
        )
    }
}

export default SecondHeader;
