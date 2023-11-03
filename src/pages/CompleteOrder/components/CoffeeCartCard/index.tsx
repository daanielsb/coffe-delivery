import { ActionsContainer, CoffeCartCardContainer, RemoveButton } from "./styles";
import CoffeTemp from "/coffees/cremoso.svg"
import { RegularText } from "../../../../components/typography";
import { QuantityInput } from "../../../../components/QuantityInput";
import { Trash } from "phosphor-react";

export function CoffeCartCard() {
    return(
        <CoffeCartCardContainer>
            <div>
                <img src={CoffeTemp}/>
                <div>
                    <RegularText color="subtitle">Expresso Tradicional</RegularText>
                    <ActionsContainer>
                        <QuantityInput size="small"/>
                        <RemoveButton>
                            <Trash size={16} /> 
                            REMOVER
                        </RemoveButton>
                    </ActionsContainer>
                </div>
            </div>
            <p>R$9,90</p>
        </CoffeCartCardContainer>

    )
}