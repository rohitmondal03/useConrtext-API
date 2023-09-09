import React, { useContext, useEffect, useState } from 'react'
import { Cart } from '../context/CartContext'
import SingleProductsPage from './SingleProducts';


const CartPage = () => {
    const { cart } = useContext(Cart)

    const [totalPrice, setTotalPrice]= useState(0)

    useEffect(() => {
        setTotalPrice(cart.reduce((acc, curr) => acc + Number(curr.price), 0))
    }, [cart])

    return (
        <section>

            <h2>Cart</h2>

            <div>
                Total Price: Rs.{totalPrice} 
            </div>

            <div>
                {cart.map((item) => (
                    <SingleProductsPage products={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default CartPage