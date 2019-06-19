import React, { Component } from 'react';
import allergyImageResized from '../../assets/brittany-colette-707600-unsplash-resized.jpg';
import arrow from '../../assets/arrow.svg';



export default class LandingPage extends Component {
    constructor(props) {
        super(props)
        
    }

    render() {
        
        
        return(
            <div className="landingpage-container">
                <div className="image-container">
                    <img src={allergyImageResized} className="allergy-image" alt="man blowing his nose"/>
                    <div className="lead-hero">
                        <h1 className="overcoming">Overcoming</h1>
                        <h1 className="seasonal">Seasonal</h1>
                        <h1 className="allergies">Allergies</h1>

                        <div className="btn-content">
                            <button className="exploreBtn">EXPLORE NOW<img className="arrow" src={arrow} alt=""/></button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}