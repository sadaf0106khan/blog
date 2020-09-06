import React, { Component } from 'react'
import { NavLink, Link } from 'react-router-dom'

export default class Header extends Component {
    render() {
        return (
            <React.Fragment>
                <nav className="navbar navbar-dark navbar-expand-sm">
                    <div className="container"> 
                        <Link className="navbar-brand" to="/home">
                            <img src="assets/images/logo.png" height="30" width="41"
                                alt="Blog" />
                        </Link>
                        <div className="collapse navbar-collapse">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span> Home
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                        <NavLink className="nav-link" to="/about">
                                        <span className="fa fa-info fa-lg"></span> About
                                    </NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/contact">
                                        <span className="fa fa-address-card fa-lg"></span> Contact
                                    </NavLink>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="jumbotron">
                    <div className="container">
                        <div className="row row-header">
                            <div className="col-12 col-sm-6">
                                <h1>Blog con Fusion</h1>
                                <p>We take inspiration from the World's best cuisines, and create a unique fusion experience. Our lipsmacking creations will tickle your culinary senses!</p>
                            </div>   
                        </div>
                    </div>
                </div>
            </React.Fragment>
        )
    }
}