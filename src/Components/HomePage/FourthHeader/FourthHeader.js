import React, { Component } from 'react';
import './FourthHeader.css';
import chevronLeft from '../../../Assets/Images/chevron-left.png';
import chevronRight from '../../../Assets/Images/chevron-left-copy.png';
import AliceCarousel from 'react-alice-carousel';

class FourthHeader extends Component {

    items = [
      {Testimonial: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!", Name: "Sarah Carlos", Position: "Creative Director"},
      {Testimonial: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!", Name: "Sarah", Position: "Director"},
      {Testimonial: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!", Name: "Sarah", Position: "Director"},
      {Testimonial: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!", Name: "Sarah", Position: "Director"},
      {Testimonial: "Thank you for guiding us through the construction process understanding and process, and always ready to accommodate our needs. We love our new space and know that it was built by the very best!", Name: "Sarah", Position: "Director"},
    ]

    state = {
      galleryItems: this.items.map((i) => (<div className = "Non-Draggable" key = {i}>
          <h2 className = "testimonialDesc">{i.Testimonial}</h2>
          <p className = "testimonialName">{i.Name}</p>
          <p className = "testimonialPosition">{i.Position}</p>
        </div>)),
    }
  
    render() {
      return (
          <section className="Testimonials">
            <h2 className="Features-title title">
              What Our Customer Says!
            </h2>
            <p className = "Features-sub">Don't just believe our words.</p>
            
            <div className = "Testimonials-slider">
              <AliceCarousel
                autoPlayInterval = {3000}
                autoPlay = {true}
                buttonsDisabled={true}
                items={this.state.galleryItems}
                ref={(el) => (this.Carousel = el)}/>
            </div>
            <div className = "slider-container">
              <div className = "slidePrev slideHover" onClick={() => this.Carousel.slidePrev()}><img className = "img-chevron-left" src= {chevronLeft} alt = "chevronLeft" /></div>
              <div className = "slideNext slideHover" onClick={() => this.Carousel.slideNext()}><img className = "img-chevron-left chevron-padding" src= {chevronRight} alt = "chevronRight" /></div>
            </div>
          </section>
      )
    }
}

export default FourthHeader