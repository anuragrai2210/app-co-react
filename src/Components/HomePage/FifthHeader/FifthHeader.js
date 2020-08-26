import React, { Component } from 'react';
import './FifthHeader.css';

class FifthHeader extends Component {

    state = {
        monthly: true,
        yearly: false
    }

    handlerMonthly = () => {
        this.setState(prevState => ({
            monthly: !prevState.monthly,
            yearly: false})
        )
    }

    handlerYearly = () => {
        this.setState(prevState => ({
            yearly: !prevState.yearly,
            monthly: false})
        )
    }

    render() {

        const monthlySpan = this.state.monthly ? "Pricing-switch-monthly is-active" : "Pricing-switch-monthly "
        const yearlySpan = this.state.yearly ? "Pricing-switch-annually is-active" : "Pricing-switch-annully"

        return (
            <section className = "membership">
                <div className = "costing-membership">
                    <span className ="spanHeading headerAlign">No Additional Costs. Pay For What You Use.</span>
                    <p className = "paraDesc">Choose the most suitable service for your needs with reasonable price.</p>
                    <div className = "container-btn">
                        <div className = "discount-yearly">10% OFF</div>
                        <button className="Pricing-switch">
                            <span className={monthlySpan} onClick = {this.handlerMonthly}>Monthly</span>
                            <span className={yearlySpan} onClick = {this.handlerYearly}>Annually</span>
                        </button>
                    </div>
                </div>
                <div className = "tilesFeatures" >

                </div>
            </section>
        )
    }
}

export default FifthHeader