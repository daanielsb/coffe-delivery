import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/coffeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    addCoffeToCart: (coffe: CartItem) => void
}

interface CartContextProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children} : CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    function addCoffeToCart(coffe: CartItem){
        const coffeAlreadyExistInCart = cartItems.findIndex(
            cartItem => cartItem.id === coffe.id
        );

        const newCart = produce(cartItems, (draft) => {
            if(coffeAlreadyExistInCart <0 ){
                draft.push(coffe)
            } else {
                draft[coffeAlreadyExistInCart].quantity += coffe.quantity
            }
        })

        setCartItems(newCart)
        

    }
    
    return(
        <CartContext.Provider value={{ cartItems, addCoffeToCart }}>
            {children}
        </CartContext.Provider>
    )

}