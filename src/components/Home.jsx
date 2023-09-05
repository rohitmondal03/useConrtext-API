import React, { useContext } from 'react'
import SingleProductsPage from './SingleProducts';
import { Cart } from '../context/CartContext';


const Home = () => {
    const { productsArray } = useContext(Cart)

    return (
        <section>
            <h1>Home Page</h1>

            {productsArray.map((prod) => (
                <SingleProductsPage key={prod.id} products={prod} />
            ))}
        </section>
    )
}

export default Home