import { useFormContext } from "react-hook-form";
import { Input } from "../../../../components/input";
import { AddressFormContainer } from "./styles";

export function AddressForm(){
    const { register } = useFormContext()


    return (
        <AddressFormContainer>
            <Input 
                placeholder="CEP" 
                type="number" 
                className="cep" 
                {...register("cep")}
            />
            <Input placeholder="Rua" className="street"/>
            <Input placeholder="Número" type="number"/>
            <Input placeholder="Complemento" className="complement"/>
            <Input placeholder="Bairro"/>
            <Input placeholder="Cidade"/>
            <Input placeholder="UF" />
        </AddressFormContainer>
        
    )
}