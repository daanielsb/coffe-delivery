import { TitleText } from "../../../../components/typography";
import { CoffeCard } from "../coffeCard";
import { CoffeList, OurCoffesContainer } from "./styles";

export function OurCoffes() {
    return (
        <OurCoffesContainer className="container">
            <TitleText size="l" color="subtitle">Nossos cafés</TitleText>
            <CoffeList>
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
                <CoffeCard />
            </CoffeList>
        </OurCoffesContainer>

    )
}