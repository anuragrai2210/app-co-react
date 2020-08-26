import React, { Component } from 'react'
import './ThirdHeader.css';
import { Link } from 'react-router-dom'
import moneyLogo from '../../../Assets/Images/money.png'
import dollarSmall from '../../../Assets/Images/dollarSmall.png';
import clock from '../../../Assets/Images/clock.png';
import fileSmall from '../../../Assets/Images/file-small.png';

const images = [moneyLogo, dollarSmall, clock, fileSmall];
const contentDesc = [
    {
        title: "Make bank",
        Desc: "Connect your bank accounts, accept credit cards, ACH, and PayPal, and support multicurrency."
    },
    {
        title: "Get paid. Every time.",
        Desc: "Collect client billing info upfront and get paid automatically with recurring payments."
    },
    {
        title: "Set it and forget it.",
        Desc: "Automate your workflow with smart systems that never drop the ball - and get even smarter with time."
    },
    {
        title: "Work alone. Together.",
        Desc: "We've assembled a catalog of standard contracts and industry insights, free for you to make your own."
    }
]

class ThirdHeader extends Component {

    state = {
        onHoverTile1: false,
        onHoverTile2: false,
        onHoverTile3: false,
        onHoverTile4: false
    }

    handleHover(param) {
        switch(param) {
            case 'tile1':
              return this.setState(prevState => ({
                onHoverTile1: !prevState.onHoverTile1})
                );
            case 'tile2':
                return this.setState(prevState => ({
                    onHoverTile2: !prevState.onHoverTile2})
                    );
            case 'tile3':
                return this.setState(prevState => ({
                    onHoverTile3: !prevState.onHoverTile3})
                    );
            case 'tile4':
                return this.setState(prevState => ({
                    onHoverTile4: !prevState.onHoverTile4})
                    );
                    default:
              return null;
        }
    }

    render() {
        const classHoverTile1 = this.state.onHoverTile1 ? "tile1Div EllipseCopy" : "tile1Div"
        const classHoverTile2 = this.state.onHoverTile2 ? "tile2Div EllipseCopy" : "tile2Div"
        const classHoverTile3 = this.state.onHoverTile3 ? "tile1Div EllipseCopy" : "tile1Div"
        const classHoverTile4 = this.state.onHoverTile4 ? "tile2Div EllipseCopy" : "tile2Div"
        return (
            <section className = "charateristic-container">
                <div className = "whyChooseUs">
                    <span className ="spanHeading">Why Choose Us ?</span>
                    <p className = "paraDesc">Nam libero tempore cum soluta as nobis est eligendi optio cumque nihile impedite quo minus id quod maxime.</p>
                    <div className = "linKDiv">
                        <Link className="learnMoreLink" style={{textDecoration: "none"}} to="app/learnMore">
                            <div className = "learn-Btn">Learn More</div>
                        </Link>
                    </div>
                </div>
                <div className = "tilesFeatures" >
                    <div className = "tile1" onMouseEnter = {() => this.handleHover("tile1")} onMouseLeave = {() => this.handleHover("tile1")}>
                        <div className = {classHoverTile1}>
                            <div className = "Ellipse-2" >
                                <img src = {images[0]} alt ="" className = "img-centre-money"/>
                            </div>
                        </div>
                        <div className = "contentDesc">
                            <span className = "content-Heading">{contentDesc[0].title}</span>
                            <p className = "content-Description">{contentDesc[0].Desc}</p>
                        </div>   
                    </div>
                    <div className = "tile2" onMouseEnter = {() => this.handleHover("tile2")} onMouseLeave = {() => this.handleHover("tile2")}>
                        <div className = {classHoverTile2}>
                            <div className = "Ellipse-2" >
                                <img src = {images[1]} alt ="" className = "img-centre-dollar"/>
                            </div>
                        </div>
                        <div className = "contentDesc">
                            <span className = "content-Heading">{contentDesc[1].title}</span>
                            <p className = "content-Description">{contentDesc[1].Desc}</p>
                        </div>   
                    </div>
                    <div className = "tile1" onMouseEnter = {() => this.handleHover("tile3")} onMouseLeave = {() => this.handleHover("tile3")}>
                        <div className = {classHoverTile3}>
                            <div className = "Ellipse-2" >
                                <img src = {images[2]} alt ="" className = "img-centre-clock"/>
                            </div>
                        </div>
                        <div className = "contentDesc">
                            <span className = "content-Heading">{contentDesc[2].title}</span>
                            <p className = "content-Description">{contentDesc[2].Desc}</p>
                        </div>   
                    </div>
                    <div className = "tile2" onMouseEnter = {() => this.handleHover("tile4")} onMouseLeave = {() => this.handleHover("tile4")}>
                        <div className = {classHoverTile4}>
                            <div className = "Ellipse-2" >
                                <img src = {images[3]} alt ="" className = "img-centre-file"/>
                            </div>
                        </div>
                        <div className = "contentDesc">
                            <span className = "content-Heading">{contentDesc[3].title}</span>
                            <p className = "content-Description">{contentDesc[3].Desc}</p>
                        </div>   
                    </div>
                </div>
            </section>
        )
    }
}

export default ThirdHeader