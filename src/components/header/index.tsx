import { HeaderButton, HeaderButtonsContainer, HeaderContainer } from "./styles";
import coffeLogoImg from '../../assets/coffe-delivery-logo.svg'
import { MapPin, ShoppingCart } from "phosphor-react";

export function Header(){
    return(
        <HeaderContainer>
            <div className="container">
                <img src={coffeLogoImg} />

                <HeaderButtonsContainer>
                    <HeaderButton variant="purple">
                        <MapPin size={20} weight="fill"/>
                        Porto Alegre, RS
                    </HeaderButton>
                    <HeaderButton variant="yellow">
                        <ShoppingCart size={20} weight="fill"/>
                    </HeaderButton>
                    
                </HeaderButtonsContainer>
            </div>


        </HeaderContainer>


    )

}