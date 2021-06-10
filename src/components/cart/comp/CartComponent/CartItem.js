import React from 'react';
import styled from 'styled-components';

export default function CartItem({item, value}) {
    const { id, name, cost_in_credits, total, count } = item;
    const { increase, decrease, removeItem } = value;
    return (
        <div className="flex my-2 border-b py-1 text-xs">
            <div className="w-2/6 product-title">
                {name}
            </div>
            <div className="w-1/6 text-right px-2 product-price">
               {parseFloat(cost_in_credits).toLocaleString()}
            </div>
            <div className="w-1/6 text-right px-2 product-qty flex justify-center items-center">
                <button className="qty-btn" onClick={() => decrease(id)}>-</button>
                <span>{count}</span>
                <button className="qty-btn" onClick={() => increase(id)}>+</button>
            </div>
            <div className="w-1/6 text-right px-2 product-total">
                {parseFloat(total).toLocaleString()}
            </div>
            <div className="mx-3 w-8 text-right remove-product" onClick={() => removeItem(id)}>
                <i className="fas fa-trash bg-purple-200 px-2 py-1 text-red-500 cursor-pointer"></i>
            </div>
        </div>
    )
};