import React, { Component } from 'react';
import allergyImageLowRes from '../../assets/brittany-colette-707600-unsplash-lowres.jpg';

export default class LeadForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: ''
        }
        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.onClick = this.onClick.bind(this);
    }

    handleChangeName(e) {
        this.setState({
            name: e.target.value,
        })
    }

    handleChangeEmail(e) {
        this.setState({
            email: e.target.value
        })
    }

    onClick() {
        alert(`        Name: ${this.state.name}
        Email: ${this.state.email}
        `)
    }


    render() {

        return(
            <div className="lead-form-container">
                <div className="input-container">
                    <div className="text-container">
                        <h4>Special Offer</h4>
                        <h3>Join Us</h3>
                        <div className="white-line"></div>
                        <p>Sign up for the newsletter to receive updates</p>

                        <input className="input-name" type="text" placeholder="Name" value={this.state.name} onChange={this.handleChangeName}/>
                        <input className="input-email" type="text" placeholder="Email Address" value={this.state.email} onChange={this.handleChangeEmail}/>
                        <button className="sign-up-btn" onClick={this.onClick}>Sign Up Now</button>

                        <p>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                    </div>
                </div>

                <div className="allergy-container">
                    <img src={allergyImageLowRes} className="allergy-image" alt="man blowing his nose"/>
                </div>

            </div>
        ) 
    }
}