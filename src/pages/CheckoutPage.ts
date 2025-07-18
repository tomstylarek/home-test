import { expect } from "@playwright/test";
import { Routes } from "../constants/Routes";
import { CheckoutFormData } from "../types/CheckoutFormData";
import { BasePage } from "./BasePage";
import { CheckoutForm } from "../components/CheckoutForm";

export class CheckoutPage extends BasePage {

    private readonly checkoutForm = new CheckoutForm(this.page);

    // Cart component selectors
    private readonly cartComponent = this.page.locator('.container', { hasText: 'Cart' })
    private readonly cartItems = this.cartComponent.locator('p:not(:has-text("Total"))');
    private readonly cartTitleContainer = this.cartComponent.locator('h4');
    private readonly cartCounter = this.cartTitleContainer.locator('span.price b');

    private readonly submitCheckoutButton = this.page.getByRole('button', { name: 'Continue to checkout' });

    override async visit() {
        this.page.goto(Routes.Checkout);
    }

    async completeForm(formData: CheckoutFormData) {
        await this.checkoutForm.fill(formData);
    }

    async submitCheckout() {
        await this.submitCheckoutButton.click();
    }

    async validateTotalCartItems() {
        await expect(this.cartItems.first()).toBeVisible();
        const totalItems = await this.cartItems.count();

        await expect(this.cartCounter).toHaveText(totalItems.toString());
    }
}