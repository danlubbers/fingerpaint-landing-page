import React from 'react';
import allergyImageLowRes from '../../assets/brittany-colette-707600-unsplash-lowres.jpg';

export default function LandingPage() {

    function handleClick() {
        alert('Learn More page is currently not active');
    }
    return(
            <div className="three-up-container">
                <div className="method-of-action">
                    <img src={allergyImageLowRes} className="allergy-image-lowres" alt="man blowing his nose"/>
                    <h2>Method of Action</h2>
                    <p>Allergen allergist astringents blood pressure bowels constipation cough dehydration epidermis eustachian tube frostbite glycemic index nervous system nits pilomotor reflex polyuria red blood cells scoliosis sebum. Allergy-triggered asthma anus blood pressure blood type bone marrowhormones malocclusion nearsighted operation sphenopalatineganglioneuralgia. </p>
                    <div className="button-wrapper">
                        <button onClick={handleClick} className="learn-more">LEARN MORE</button>
                    </div>
                </div>
                <div className="efficacy">
                    <img src={allergyImageLowRes} className="allergy-image-lowres" alt="man blowing his nose"/>
                    <h2>EFFICACY</h2>
                    <p> Allergen allergist astringents blood pressure bowels constipation cough dehydration epidermis eustachian tube frostbite glycemic index nervous system nits pilomotor reflex polyuria red blood cells scoliosis sebum.</p>
                    <div className="button-wrapper">
                        <button onClick={handleClick} className="learn-more">LEARN MORE</button>
                    </div>
                </div>
                <div className="safety">
                    <img src={allergyImageLowRes} className="allergy-image-lowres" alt="man blowing his nose"/>
                    <h2>Safety</h2>
                    <p>Airway obstruction arteries and veins bacteria blood glucose level carbohydrate counting cerumen congestion cough ct scan or cat scan farsighted gastroenteritis glycemic index heat exhaustion navel occupational therapy otitis media polydipsia pulmonary pulmonologist rescue medications retractions scar skin test spirometer surgery tragus. </p>
                    <div className="button-wrapper">
                        <button  onClick={handleClick} className="learn-more">LEARN MORE</button>
                    </div>                        
                </div>
            </div>
    )
}