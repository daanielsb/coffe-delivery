import { Intro } from "./components/Intro";
import { OurCoffes } from "./components/OurCoffes";
import { CoffeCard } from "./components/coffeCard";
import { HomeContainer } from "./styles";

export function HomePage(){
    return (
        <HomeContainer>
            <Intro />
            <OurCoffes/>
        </HomeContainer>
    )
    
}