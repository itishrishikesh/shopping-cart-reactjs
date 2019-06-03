import React, { Component } from "react";
import { Link } from 'react-router-dom';
import styled from "styled-components";
import logo from '../logo.svg';
import Button from "./Button";
export default class Navbar extends Component{
    render(){
        return <NavWrapper className="navbar navbar-expand-sm navbar-dark px-sm-5">
            <Link to='/'>
                <img src={logo} alt="store" className="navbar-brand" />
            </Link> 
            <ul className="navbar-nav align-items-center">
                <li className="nav-item ml-3">
                    <Link to="/" className="nav-links">
                        Products
                    </Link>
                </li>
            </ul>
            <Link to="/carts" className="ml-auto">
                <Button>
                    <span className="mr-2">
                        <i className="fas fa-cart-plus"></i>
                    </span> 
                    my cart
                </Button>
            </Link>
        </NavWrapper>;
    }
}

const NavWrapper = styled.nav`
    background: var(--mainBlue);
    .nav-link{
        color: var(--mainWhite) !important;
        font-size: 1.3rem;
        text-transform: capitalize;
    }
`;