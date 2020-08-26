import React from 'react';
import './SlideShow.css';
import File from '../../../Assets/Images/file.png';
import fileAlt from '../../../Assets/Images/file-alt.png';
import dollar from '../../../Assets/Images/invalidname.png';
import contract from '../../../Assets/Images/file-contract.png';
import proposalImg from '../../../Assets/Images/rectangle-6.png';
import slide1 from '../../../Assets/Images/slide_2.jpg';
import slide2 from '../../../Assets/Images/slide_5.jpg';
import slide3 from '../../../Assets/Images/slide_7.jpg';
import { Slide } from 'react-slideshow-image';


const slideImages = [
    slide1,
    slide2,
    slide3,
    proposalImg,
    slide2,
    slide3,
  ];

const features = [
    {
        title: "Proposals",
        desc: "Make them an offer they can't refuse"
    },
    {
        title: "Invoicing",
        desc:"Turn any day into pay day"
    },
    {
        title: "Payments",
        desc:"Take the Free out of freelancing"
    },
    {
        title:"Contracts",
        desc:"Shake hands. Everyone wins"
    },
    {
        title:"Propsals",
        desc:"Make them an offer they can't refuse"
    },
    {
        title:"Propsals",
        desc:"Make them an offer they can't refuse"
    }
]

const boxImages = [File,fileAlt,dollar,contract,File,File]

const slideProperties = {
    duration:	5000,
    transitionDuration: 500,
    arrows: true,
    pauseOnHover: true,
    indicators: function(i) {
        return(
            <div className = "indicator">
                <li className = "li-fit-content">
                    <div className = "li-fit-left">
                        <div className = "box-image">
                            <img src = {boxImages[i]} className = "img-centre" alt = "Propsals" />
                        </div>
                        </div>
                        <div className = "li-fit-right">
                        <span className = "main-li-heading">{features[i].title}</span>
                        <span className = "li-description">{features[i].desc}</span>
                    </div>
                </li>
            </div>
        )
    }
}

const SlideShow = () => {
    return (
        <Slide {...slideProperties}>
        { slideImages.map((each, index) => <img key={index} src={each} alt={index.toString()}/>) }
      </Slide>
    )
}

export default SlideShow;
