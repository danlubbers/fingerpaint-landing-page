import React, { Component } from 'react';
// import { Link } from 'react-router-dom';

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.handleClick = this.handleClick.bind(this)
    }

    // this method scrolls to the reference div that is selected from App.js when user clicks "Important Safety Information" in the NavBar
    handleClick = () => {
        // console.log('newRef: ', this.props.children.props.newRef.current)
        const ISIRef = this.props.children.props.newRef.current;
        if(ISIRef) {
            ISIRef.scrollIntoView({behavior: 'smooth', block: 'start'})
        }
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
            </nav>

        )
    }
}