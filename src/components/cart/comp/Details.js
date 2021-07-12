import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { ButtonContainer } from './Button';
import { ProdConsumer } from './data/context';
import styled from 'styled-components';

export default class Details extends Component {
    render() {
        return (
            <ProdConsumer>
                {(value) => {
                    console.log(value.details);
                    let { id, name, poster, cost_in_credits, manufacturer, inCart, model, cargo_capacity, passengers, starship_class, hyperdrive_rating, crew, consumables } = value.details;
                    
                    return (
                       <InfoContainer className="flex flex-col items-center">
                           <div className="detailsContainer bg-gray-200 px-5 py-2 shadow-md rounded">
                            <h2 className="font-bold text-center text-xl my-4">{name}</h2>
                            <div className="img-container">
                                <div className="flex flex-col">
                                    <img src={poster} alt={name} />
                                    <h4 className="font-bold text-center mt-2">Cost: {parseFloat(cost_in_credits).toLocaleString()} credits</h4>
                                </div>
                                <div className="info capitalize text-sm space-y-2">
                                    <h3 className="font-bold text-xl my-3">Ship Specifications:</h3>
                                    <p><strong>Manufactured by:</strong> {manufacturer}</p>
                                    <p><strong>Ship Class:</strong> {starship_class}</p>
                                    <p><strong>Starship Model:</strong> {model}</p>
                                    <p><strong>Hyperdrive rating:</strong> {hyperdrive_rating==="unknown" ? Math.floor(Math.random() * 5) + ".0" : hyperdrive_rating}</p>
                                    <p><strong>Cargo capacity:</strong> {cargo_capacity==="unknown" ? Math.floor(Math.random() * 337653).toLocaleString() : parseFloat(cargo_capacity).toLocaleString()} kg</p>
                                    <p><strong>Crew count:</strong> {crew==="unknown" ? Math.floor(Math.random() * 999) : crew}</p>
                                    <p><strong>Passenger count:</strong> {passengers==="unknown" ? Math.floor(Math.random() * 99) : passengers}</p>
                                    <p><strong>Supplies span</strong>: {consumables==="unknown" ? Math.floor(Math.random() * 99) + " weeks" : consumables}</p>
                                </div>
                            </div>
                            <div className="btnArray btns space-x-3 my-5">
                                <Link to ='/'>
                                    <ButtonContainer cart className="btnContainer-I">
                                        Continue Shopping
                                    </ButtonContainer>
                                </Link>
                                <ButtonContainer className="btnContainer" cart disabled={inCart ? true : false} onClick={() => { value.addToCart(id) }}>
                                    {inCart ? 'in cart' : 'add to cart'}
                                </ButtonContainer>
                            </div>
                           </div>
                       </InfoContainer>
                    )
                }}
            </ProdConsumer>
        )
    }
}

const InfoContainer = styled.div`
    font-family: font-family: 'Ubuntu', sans-serif !important;
    height: 94.5vh;
    padding-bottom: 1rem;
    background: url('https://starwarsblog.starwars.com/wp-content/uploads/2020/04/star-wars-backgrounds-23-1536x864.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    overflow-y: auto;

    .detailsContainer {
        max-width: 400px;
        margin: 5rem 1rem;
    }

    img {
        max-width: 100%;
        border-radius: 0.25rem;
    }

    .info {
        max-width: 80%;
    }
@media (max-width: 350px) {
    .btnArray {
        display: flex;
        flex-direction: column;
        a {
            margin: 0;
            width: 100%;
            .btnContainer-I {
                width: 100%;
            }
        }
        .btnContainer {
            margin-top: 0.75rem;
            margin-left: 0;
        }
    }
}
`;