import React, { Component } from 'react';
import ShipItem from './ShipItem';
import { ProdConsumer } from './data/context';

export default class ProductList extends Component {
    render() {
        return (
            <section className="mt-10">
                <div className="py-3">
                    <div className="product-container">
                    <h2 className="text-white text-3xl font-bold text-center mt-4">Starship Gallery</h2>
                    <p className="text-white text-center my-5">Choose a ship for your next space voyage.</p>
                        <div className="flex flex-wrap justify-center">
                            <ProdConsumer>
                                {value => { 
                                    return value.shipsArray.map(product => {
                                        return <ShipItem key={product.id} product={product} /> 
                                    })
                                 }}
                            </ProdConsumer>
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}