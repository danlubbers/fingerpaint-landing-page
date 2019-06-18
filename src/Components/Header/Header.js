import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        return(
            <nav>
                <ul>
                    <li className="home">Home</li>
                    <li>Safety</li>
                    <li>Efficacy</li>
                    <li>Dosing</li>
                    <li>Order Samples</li>
                    <li>Important Safety Information</li>
                </ul>
            </nav>
        )
    }
}