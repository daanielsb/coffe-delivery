import { IntroContainer, IntroContent } from "./style";
import introImg from '../../../../assets/intro-coffe.svg'

export function Intro(){
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>Encontre o café perfeito para qualquer hora do dia</div>
                <img src={introImg}/>
            </IntroContent>
        </IntroContainer>
    )
}