import { useCart } from "../hooks/useCart";
import { AddToCartIcon, RemoveFromCartIcon } from "./Icons";

export function Products ({products}){
    const {addToCart,removeFromCart, cart} = useCart()

    const checkProductInCart = product =>{
        return cart.some(item => item.id === product.id)
    }

    const hasProducts = products?.length > 0

    return (
        <main className="main-products">
        {hasProducts 
        ? 
        (<ul className="product-list">
            {products.map(product => {
                const isProductInCart = checkProductInCart(product)
                return (
                <li key={product.id} className="product-elements">
                    <img src={product.image} alt={product.title} width="150" />
                    <div>
                    <strong>{product.title} </strong> - ${product.price}           
                    </div>
                    <div>
                        <button className={isProductInCart? "button-removeCart" : "button-addCart"} 
                        onClick={()=> 
                            isProductInCart? removeFromCart(product): addToCart(product)}>
                           {
                            isProductInCart
                            ? <RemoveFromCartIcon/>
                            :<AddToCartIcon/>
                            }
                        </button>
                    </div>   
                </li>
                )
            })}
        </ul>) 
        : 
        (
        <p>Loading...</p>
        )
        }
        </main>
        
    )
}