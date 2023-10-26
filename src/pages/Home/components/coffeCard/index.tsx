import { ShoppingCart } from 'phosphor-react'
import caffe1 from '../../../../assets/coffe1.svg'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/typography'
import { AddCartWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from './styles'


export function CoffeCard() {
    return(
        <CoffeCardContainer>
            <img src={caffe1}/>
            <Tags>
                 <span>tradicional</span>
                 <span>com leite</span>
            </Tags>
            <Name>Expresso Tradicional</Name>
            <Description>O Tradicional café feito com água quente e grãos moídos</Description>

            <CardFooter>
                <div>
                    <RegularText size='s'>R$</RegularText>
                    <TitleText size='m' color='text' as="strong">9,90</TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput/>
                    <button>
                    <ShoppingCart size={22} weight='fill'/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeCardContainer>

        
        
    )
}