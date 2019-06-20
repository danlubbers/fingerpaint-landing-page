import React from 'react';
import allergyImageResized from '../../assets/brittany-colette-707600-unsplash-resized.jpg';
import arrow from '../../assets/arrow.svg';

export default function LandingPage() {  

    function handleClick() {
        alert('Explore Now page is currently not active')
    }

    return(
        <div className="landingpage-container">
            <div className="image-container">
                <img src={allergyImageResized} className="allergy-image" alt="man blowing his nose"/>
                <div className="lead-hero">
                    <div className="opacity"> 
                        <h1 className="overcoming">Overcoming</h1>
                        <h1 className="seasonal">Seasonal</h1>
                        <h1 className="allergies">Allergies</h1>
                    </div>

                    <div className="btn-content">
                        <button onClick={handleClick} className="exploreBtn">EXPLORE NOW<img className="arrow" src={arrow} alt=""/></button>
                    </div>
                </div>
            </div>
        </div>
    )
}