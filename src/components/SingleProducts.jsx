import { useContext } from "react";
import { Cart } from "../context/CartContext";


export default function SingleProductsPage({ products }) {
    const { name, price, img, id } = products;

    const { cart, setCart } = useContext(Cart)


    return (
        <div style={{ margin: "4rem", padding: '1rem', border: "2px solid black" }}>
            <h1>Prod: {name}</h1>
            <img src={img} alt="img" style={{ height: "20rem" }} />
            <h3>Price: Rs.{price.substring(0, 3)}</h3>

            {cart.includes(products) ? (
                <button onClick={() => setCart(cart.filter((item) => item.id !== id))}>
                    Remove From Cart
                </button>
            ) : (
                <button onClick={() => setCart([...cart, products])}>
                    Add to cart
                </button>
            )}
        </div>
    )
}