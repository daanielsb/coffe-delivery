import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { CompleteOrderContainer } from "./style";

export function CompleteOrderPage() {
    return (
        <CompleteOrderContainer className="container">
            <CompleteOrderForm/>
        </CompleteOrderContainer>
        )
}