import React from 'react'
import CartItem from './CartItem';
export default function CartList({value}) {
    console.log(value, value.cart);
    return (
        <div className = "container-fluid">
            {value.cart.map(
                item => {
                    return <CartItem key={item.id} item={item} value={value} />
                }
            )}

        </div>
    )
}
