import { TitleText } from "../../../../components/typography";
import { CoffeCartCard } from "../CoffeeCartCard";
import { ConfirmationSection } from "./ConfirmationSection";
import { DetailsContainer, SelectedCoffeesContainer } from "./styles";

export function SelectedCoffees() {
    return(
        <SelectedCoffeesContainer>
            <TitleText size="xs" color="subtitle">
                Cafés Selecionados
            </TitleText>

            <DetailsContainer>
                <CoffeCartCard/>
                <CoffeCartCard/>
                <CoffeCartCard/>

                <ConfirmationSection/>
            </DetailsContainer>
            
        </SelectedCoffeesContainer>

    )
}