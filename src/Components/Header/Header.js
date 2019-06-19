import React, { Component, createRef } from 'react';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            ref: createRef()
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick = () => {
        console.log('ref: ', this.state.ref)
    }


    render() {


        return(
            <nav>
                <ul>
                    <li className="home">Home</li>
                    <li>Safety</li>
                    <li>Efficacy</li>
                    <li>Dosing</li>
                    <li>Order Samples</li>
                    <li onClick={this.handleClick}>Important Safety Information</li>
                </ul>
            {/* <div ref={this.state.ref}> 
                <h1>TESTING DIV</h1>
            </div> */}
            </nav>

        )
    }
}