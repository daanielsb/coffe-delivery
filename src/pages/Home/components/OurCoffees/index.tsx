import { TitleText } from "../../../../components/typography";
import { coffees } from "../../../../data/coffee";
import { CoffeCard } from "../coffeeCard";
import { CoffeeList, OurCoffesContainer } from "./styles";

export function OurCoffees() {
    return (
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
            <CoffeeList>
                {coffees.map( (coffee) => (
                    <CoffeCard key={coffee.id} coffee={coffee}/>
                ))}
                
            </CoffeeList>
        </OurCoffesContainer>

    )
}