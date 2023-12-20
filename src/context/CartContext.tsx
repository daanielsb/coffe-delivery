import { ReactNode, createContext, useState } from "react";
import { Coffee } from "../pages/Home/components/coffeeCard";
import { produce } from "immer";

export interface CartItem extends Coffee {
    quantity: number;
}

interface CartContextType{
    cartItems: CartItem[];
    cartQuantity: number;
    cartItemsTotal: number;
    addCoffeeToCart: (coffee: CartItem) => void;
    changeCartItemQuantity:(cartItemId: number, type: 'increase' | 'decrease') => void;
    removeCartItem: (cartItemID: number) => void
}

interface CartContextProviderProps{
    children: ReactNode;
}

export const CartContext = createContext({} as CartContextType)

export function CartContextProvider({ children} : CartContextProviderProps) {
    const [cartItems, setCartItems] = useState<CartItem[]>([])

    const cartQuantity = cartItems.length

    const cartItemsTotal = cartItems.reduce((total, cartItem) => {
        return total + cartItem.price * cartItem.quantity
    }, 0)

    function addCoffeeToCart(coffee: CartItem) {
        const coffeeAlreadyExistsInCart = cartItems.findIndex(
          (cartItem) => cartItem.id === coffee.id
        );

        const newCart = produce(cartItems, (draft) => {
            if(coffeeAlreadyExistsInCart < 0 ){
                draft.push(coffee)
            } else {
                draft[coffeeAlreadyExistsInCart].quantity += coffee.quantity
            }
        })

        setCartItems(newCart)             

    }

    function changeCartItemQuantity(
        cartItemId: number, 
        type: 'increase' | 'decrease' 
        ) {
        const newCart = produce(cartItems, (draft) => {
            const coffeExistInCart = cartItems.findIndex(
                cartItem => cartItem.id === cartItemId
            )

            if(coffeExistInCart >= 0){
                const item = draft[coffeExistInCart];
                draft[coffeExistInCart].quantity = type === 'increase' ? item.quantity +1 : item.quantity -1;
            }
        })

        setCartItems(newCart);
    }

    function removeCartItem(cartItemId: number) {
        const newCart = produce(cartItems, draft => {
            const coffeExistInCart = cartItems.findIndex(
                cartItem => cartItem.id === cartItemId
            )

            if(coffeExistInCart >= 0){
                draft.splice(coffeExistInCart, 1)
            }
        })

        setCartItems(newCart);
    }
    
    return(
        <CartContext.Provider value={{ 
            cartItems, 
            cartQuantity, 
            cartItemsTotal,
            addCoffeeToCart, 
            changeCartItemQuantity, 
            removeCartItem 
            }}
        >
            {children}
        </CartContext.Provider>
    )

}