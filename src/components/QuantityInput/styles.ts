import styled from "styled-components";

export const QuantityInputContainer = styled.div`
    flex: 1;
    background: ${({theme})=> theme.colors["base-button"]};
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 4px;
    border-radius: 6px;


`

export const IconWrapper = styled.button.attrs({
    type: "button"
})`
    
`
    