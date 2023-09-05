import React, { createContext, useState } from 'react'
import { faker } from '@faker-js/faker';

export const Cart = createContext();
faker.seed(100)

const CartContext = ({children}) => {
    const [cart, setCart]= useState([])

    const productsArray = [...Array(20)].map(() => ({
        id: faker.string.uuid(),
        name: faker.commerce.productName(),
        price: faker.commerce.price(),
        img: faker.image.url()
    }))

    return (
        <Cart.Provider value={{cart, setCart, productsArray}}>{children}</Cart.Provider>
    )
}

export default CartContext