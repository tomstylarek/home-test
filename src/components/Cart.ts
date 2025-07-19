import { expect, Page } from "@playwright/test";

export class Cart {
    private readonly cartComponent = this.page.locator('.container', { hasText: 'Cart' })
    private readonly cartItems = this.cartComponent.locator('p:not(:has-text("Total"))');
    private readonly cartTitleContainer = this.cartComponent.locator('h4');
    private readonly cartCounter = this.cartTitleContainer.locator('span.price b');

    constructor(private readonly page: Page) {}

    async assertItemCountMatchesTotal() {
        await expect(this.cartItems.first()).toBeVisible();
        const totalItems = await this.cartItems.count();

        await expect(this.cartCounter).toHaveText(totalItems.toString());
    }
}