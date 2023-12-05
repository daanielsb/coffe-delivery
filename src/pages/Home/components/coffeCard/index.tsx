import { ShoppingCart } from 'phosphor-react'
import { QuantityInput } from '../../../../components/QuantityInput'
import { RegularText, TitleText } from '../../../../components/typography'
import { AddCartWrapper, CardFooter, CoffeCardContainer, Description, Name, Tags } from './styles'
import { formatMoney } from '../../../../utils/formatMoney'
import { useCart } from '../../../../hooks/useCart'
import { useState } from 'react'

export interface Coffee {
    id: number;
    tags: string[];
    name: string;
    description: string;
    photo: string;
    price: number;
}

interface CoffeProps{
    coffee: Coffee;
}

export function CoffeCard({coffee}: CoffeProps) {
    const [quantity, setQuantity] = useState(1);

    function handleIncrease(){
       setQuantity(state => state + 1) 
    }

    function handleDecrease(){
        setQuantity(state => state - 1) 
     }

    const { addCoffeToCart } = useCart()

    function handleAddToCart() {
        const coffeToAdd = {
            ...coffee,
            quantity: 1,
        }
        addCoffeToCart(coffeToAdd)
    }


    const formattedPrice = formatMoney(coffee.price);



    return(
        <CoffeCardContainer>
            <img src={`/coffees/${coffee.photo}`} />
            <Tags>
                {coffee.tags.map((tag) => (
                    <span key={`${coffee.id}${tag}`}>{tag}</span>
                ))}
            </Tags>
            <Name>{coffee.name}</Name>
            <Description>{coffee.description}</Description>

            <CardFooter>
                <div>
                    <RegularText size='s'>R$</RegularText>
                    <TitleText size='m' color='text' as="strong">{formattedPrice}</TitleText>
                </div>
                <AddCartWrapper>
                    <QuantityInput
                        onIncrease={handleIncrease}
                        onDecrease={handleDecrease}
                        quantity={quantity}
                    />
                    <button onClick={handleAddToCart}>
                    <ShoppingCart size={22} weight='fill'/>
                    </button>
                </AddCartWrapper>
            </CardFooter>
        </CoffeCardContainer>

        
        
    )
}