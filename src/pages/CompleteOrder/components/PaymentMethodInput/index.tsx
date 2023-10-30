import { CreditCard } from "phosphor-react";
import { PaymentMethodontainer } from "./styles";

export function PaymentMethodInput(){
    return(
        <PaymentMethodontainer>            
            <CreditCard size={16}/>
            Cartão de crédito            
        </PaymentMethodontainer>
    )
}