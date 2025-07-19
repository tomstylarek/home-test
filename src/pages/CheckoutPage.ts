import { Routes } from "../constants/Routes";
import { CheckoutFormData } from "../types/CheckoutFormData";
import { BasePage } from "./BasePage";
import { CheckoutForm } from "../components/CheckoutForm";
import { Cart } from "../components/Cart";

export class CheckoutPage extends BasePage {

    private readonly checkoutForm = new CheckoutForm(this.page);
    private readonly cart = new Cart(this.page);

    override async visit() {
        this.page.goto(Routes.Checkout);
    }

    async completeForm(formData: CheckoutFormData) {
        await this.checkoutForm.fill(formData);
    }

    async submitCheckout() {
        await this.checkoutForm.submit();
    }

    async validateTotalCartItems() {
        await this.cart.assertItemCountMatchesTotal();
    }
}