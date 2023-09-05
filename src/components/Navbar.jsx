import React from 'react'
import { Link } from "react-router-dom"


const Navbar = () => {
    return (
        <nav className='navbar'>
            <h2>USE context API</h2>

            <ul>
                <Link to={`/`}>home</Link>
                <Link to={`/cart`}>cart</Link>
            </ul>
        </nav>
    )
}

export default Navbar