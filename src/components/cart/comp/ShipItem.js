import React, { Component } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ProdConsumer } from './data/context';

export default class ShipItem extends Component {
    render() {
        let { id, name, poster, cost_in_credits, inCart } = this.props.product;
        let altCost  = Math.random() * 1849347;
        return (
            <ProductContainer className="">
                    <ProdConsumer>
                        {value => (
                            <div className="imgContainer">
                                <Link to="/details" className="h-3/4">
                                    <img src={poster} alt={name} className="h-full" onClick={() => value.handleDetails(id)} />
                                </Link>
                                <button 
                                    className="cartBtn"
                                    disabled={inCart ? true : false}
                                    onClick={() => {value.addToCart(id);}}>
                                        {inCart ? (<p className="btn-text text-sm px-2 flex items-center justify-center py-1">Added to Cart</p>) : (<span className="btn-text text-sm px-2 flex items-center justify-center py-1">Add Item<span className="fas fa-cart-plus mx-1"></span></span>)}
                                </button>
                            </div>
                        )}
                    </ProdConsumer>
                    
                    <div className="cardFooter flex items-center justify-between px-3 py-2 m-0">
                        <span>{name}</span>
                        <span>{parseFloat(cost_in_credits).toLocaleString()}</span>
                    </div>
            </ProductContainer>
        )
    }
}

const ProductContainer = styled.div`
    margin: 1rem;
    width: 300px;
    background: #111827;
    border-radius: 0.25rem;
    overflow: hidden;
    box-shadow: 2px 2px 5px #757070;
    color: whitesmoke;

    .cardFooter {
        transition: all 0.4s ease-in-out;
    }

    .imgContainer {
        position: relative;
        overflow: hidden;
        height: 80%;
    }

    img {
        transition: all 0.4s linear;
        width: 100%;
    }

    .cartBtn {
        position: absolute;
        right: 0;
        bottom: 0;
        background: royalblue;
        color: var(--mainWhite);
        font-size: 1.25rem;
        transform: translateX(101%);
        transition: transform 0.5s ease-in-out;
    }

    .imgContainer:hover .cartBtn {
        transform: translateX(0%);
    }

    .cartBtn:hover {
        background: var(--mainBlue);
        transition: transform 0.5s ease-in-out;
    }
`
