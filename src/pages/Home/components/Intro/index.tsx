import { BenefitsContainer, IntroContainer, IntroContent, IntroTitle } from "./style";
import introImg from '../../../../assets/intro-coffe.svg'
import { RegularText } from "../../../../components/typography";

export function Intro(){
    return(
        <IntroContainer>
            <IntroContent className="container">
                <div>
                    <section>
                        <IntroTitle size="xl">
                            Encontre o café perfeito para qualquer hora do dia
                        </IntroTitle>
                        <RegularText size="l" color="subtitle" as='h3'>
                            Com o Coffe Delivery voce recebe seu café onde estiver, a qualquer hora
                        </RegularText>                   
                    </section>
                    <BenefitsContainer>
                        <p>1</p>
                        <p>2</p>
                        <p>3</p>
                        <p>4</p>                  
                    </BenefitsContainer>
                </div>
                <img src={introImg}/>
            </IntroContent>
        </IntroContainer>
    )
}