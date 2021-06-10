import React from 'react'
// import PaypalBtn from './Paypal';

export default function CartTotal({value}) {
    let { cartSubtotal, cartTax, cartTotal, clearCart } = value;
    cartSubtotal = cartSubtotal.toLocaleString();
    cartTax = cartTax.toFixed(2);
    cartTax = parseFloat(cartTax).toLocaleString();
    cartTotal = cartTotal.toFixed(2);
    cartTotal = parseFloat(cartTotal).toLocaleString();
    console.log(value, Number(value.cartSubtotal));
    return (
        <div className="container text-right">
            <div>
                <button className="clear-btn" onClick={() => clearCart()}>Clear Cart</button>
            </div>
            <div className="mt-3">
                <h6 className="font-bold">Subtotal: {cartSubtotal}</h6>
                <h6 className="font-bold">VAT: {cartTax}</h6>
                <h6 className="font-bold">Total: {cartTotal}</h6>
            </div>
        </div>
    )
}
