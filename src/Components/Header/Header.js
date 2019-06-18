import React, { Component } from 'react';

export default class Header extends Component {

    render() {

        return(
            <nav>
                <ul>
                    <li>Home</li>
                    <li>Safety</li>
                    <li>Efficacy</li>
                    <li>Dosing</li>
                    <li>Order Samples</li>
                    <li>Important Safety Imformation</li>
                </ul>
            </nav>
        )
    }
}