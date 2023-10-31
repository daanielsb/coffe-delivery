import { CompleteOrderForm } from "./components/CompleteOrderForm";
import { SelectedCoffees } from "./components/SelectedCoffees";
import { CompleteOrderContainer } from "./style";

export function CompleteOrderPage() {
    return (
        <CompleteOrderContainer className="container">
            <CompleteOrderForm/>
            <SelectedCoffees/>
        </CompleteOrderContainer>
        )
}