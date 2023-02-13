import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    let totalPopulation=0;
    for (let index = 0; index < cart.length; index++) {
        const country = cart[index];
        totalPopulation = totalPopulation+ country.population;
    }
    return (
        <div>
            <h2>Cart length: {cart.length}</h2>
            <h2>Total Population: {totalPopulation}</h2>
            <ul>You have selected:
               {cart.map(c => <li>{c.name['common']}</li>)}
            </ul>
        </div>
    );
};

export default Cart;