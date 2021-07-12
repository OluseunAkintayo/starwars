import React, { Component } from 'react';
import { ProdConsumer } from '../data/context';
import styled from 'styled-components';

import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotal from './CartTotal';


export default class Cart extends Component {
    render() {
        return (
            <CartPage>
                <ProdConsumer>
                    {value => {
                        const {cart} = value;
                        if (cart.length > 0) {
                            return (
                                <div className="max-w-4xl mx-auto space-y-6 p-3 mt-16 bg-white">
                                    <h3 className="text-center text-xl font-bold mb-5">Your Cart</h3>
                                    <div className="cartItem-container">
                                        <CartList value={value} />
                                    </div>
                                    <CartTotal value={value} history={this.props.history} />
                                </div>
                            );
                        } else  {
                            return ( <EmptyCart /> );
                        }
                    }}
                </ProdConsumer>
            </CartPage>
        )
    }
}

const CartPage = styled.section`
    height: 94.5vh;
    background-image: url('https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-23-1536x864.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-y: auto;
    opacity: 0.7;

    .cartItem-container {
      height: 51.6vh;
      overflow-y: auto;
      padding-left: 1rem;
    }
`;