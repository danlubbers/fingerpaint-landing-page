import React, { Component } from 'react';
import allergyImageLowRes from '../../assets/brittany-colette-707600-unsplash-lowres.jpg';

export default class LeadForm extends Component{
    constructor(props) {
        super(props)

        this.state = {
            name: '',
            email: '',
            checked: true,
        }

        this.handleChangeName = this.handleChangeName.bind(this);
        this.handleChangeEmail = this.handleChangeEmail.bind(this);
        this.handleCheck = this.handleCheck.bind(this);
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

    handleCheck() {
        this.setState({checked: !this.state.checked})
    }

    onClick() {
        if(this.state.name === '' || this.state.email === '') {
            alert('You must fill out the provided fields for submission');

        } else if (!/^\S+@\S+\.\S+$/.test(this.state.email)) {
            alert('You must use valid email syntax!');

            } else { 
                alert(`        Name: ${this.state.name}
        Email: ${this.state.email}    
        Checked: ${this.state.checked}
            `)};
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

                        <div className="terms-conditions">
                            <input className="checkbox" type="checkbox" onChange={this.handleCheck} defaultChecked={this.state.checked}/>
                            <p>By subscribing you agree to our Terms & Conditions and Privacy & Cookies Policy.</p>
                        </div>
                    </div>
                </div>

                <div className="allergy-container">
                    <img src={allergyImageLowRes} className="allergy-image" alt="man blowing his nose"/>
                </div>

            </div>
        ) 
    }
}