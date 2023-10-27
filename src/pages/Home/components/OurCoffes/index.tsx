import { TitleText } from "../../../../components/typography";
import { coffees } from "../../../../data/coffe";
import { CoffeCard } from "../coffeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffes() {
    return (
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
            <CoffeList>
                {coffees.map( (coffee) => (
                    <CoffeCard key={coffee.id} coffee={coffee}/>
                ))}
                
            </CoffeList>
        </OurCoffesContainer>

    )
}