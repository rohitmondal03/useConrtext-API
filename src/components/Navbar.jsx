import React, { useContext } from 'react'
import { Link } from "react-router-dom"
import { Cart } from '../context/CartContext'


const Navbar = () => {
    const { cart } = useContext(Cart)

    return (
        <nav className='navbar'>
            <h2>USE context API</h2>

            <ul>
                <Link to={`/`}>home</Link>
                <Link to={`/cart`}>cart: {cart.length}</Link>
            </ul>
        </nav>
    )
}

export default Navbar