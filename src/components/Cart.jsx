import React, { useContext } from 'react'
import { Cart } from '../context/CartContext'
import SingleProductsPage from './SingleProducts';


const CartPage = () => {
    const { cart } = useContext(Cart)
    // console.log(cart);

    return (
        <section>

            <div>Cart</div>

            <div>
                {cart.map((item) => (
                    <SingleProductsPage products={item} key={item.id} />
                ))}
            </div>
        </section>
    )
}

export default CartPage