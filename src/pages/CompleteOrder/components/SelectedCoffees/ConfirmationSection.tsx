import { RegularText } from "../../../../components/typography";
import { ConfirmationSectionContainer } from "./styles";

export function ConfirmationSection(){
    return(
        <ConfirmationSectionContainer>
            <div>
                <RegularText size="s">Total de itens</RegularText>
                <RegularText>R$9,90</RegularText>
                
            </div>
            
        </ConfirmationSectionContainer>
    )
}