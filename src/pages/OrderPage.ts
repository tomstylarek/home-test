import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Routes } from "../constants/Routes";

export class OrderPage extends BasePage {
    private readonly orderNumberElement = this.page.locator('[data-id=ordernumber]');

    override async visit() {
        await this.page.goto(Routes.Order);
    }

    async checkOrderNumber() {
        await expect(this.orderNumberElement).toHaveText(/Order Number: \d+/);
    }
}