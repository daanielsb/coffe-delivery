import caffe1 from '../../../../assets/coffe1.svg'
import { CoffeCardContainer, Name, Tags } from './styles'


export function CoffeCard() {
    return(
        <CoffeCardContainer>
            <img src={caffe1}/>
            <Tags>
                 <span>tradicional</span>
                 <span>com leite</span>
            </Tags>
            <Name>Expresso Tradicional</Name>
        </CoffeCardContainer>
        
    )
}