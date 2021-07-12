import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <Nav className="navbar h-12">
                <div className="h-full w-2/6">
                    <Link to="/" className="flex h-full">
                        <img src="https://cssanimation.rocks/demo/starwars/images/star.svg" />
                        <img src="https://cssanimation.rocks/demo/starwars/images/wars.svg" />
                    </Link>
                </div>
                <Link to="/cart" className="cartLink" title="Cart">
                    <i class="fas fa-shopping-cart"></i>
                </Link>
            </Nav>
        )
    }
}
const Nav = styled.nav`
    background-color: black;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    top: 0;
    z-index: 1;
    justify-content: space-between;
    align-items: center;
    color: var(--mainWhite);
    padding: 0.75rem 1rem;
    .cartLink {
        padding: 0.25rem 0.5rem;
        font-size: 1.25rem;
    }
`;