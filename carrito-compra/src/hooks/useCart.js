import { useContext } from "react";
import { CartContext } from "../context/cart";


export const useCart= ()=>{
    const contextCarrito = useContext(CartContext)

    if (contextCarrito === undefined){
        throw new Error("UseCart must be used within a cartProvider")
    }

    return contextCarrito
}