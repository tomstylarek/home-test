import { expect, Locator } from "@playwright/test";
import { Routes } from "../constants/Routes";
import { BasePage } from "./BasePage";
import { GridItem } from "../types/GridItem";

export class GridPage extends BasePage {
    private readonly gridItems = this.page.locator('#menu .item');

    override async visit() {
        await this.page.goto(Routes.Grid);
    }

    private getItem(position: number): Locator {
        return this.gridItems.nth(position - 1);
    }

    private getItemName(position: number): Locator {
        return this.getItem(position).locator('[data-test-id=item-name] > b');
    }

    private getItemNumber(position: number): Locator {
        return this.getItem(position).locator('[data-test-id=card-number]');
    }

    private getItemPrice(position: number): Locator {
        return this.getItem(position).locator('#item-price');
    }

    private getItemImage(position: number): Locator {
        return this.getItem(position).locator('img');
    }

    private getItemButton(position: number): Locator {
        return this.getItem(position).locator('[data-test-id=add-to-order]');
    }

    private async validateItemName(position: number, expectedName: string) {
        await expect(this.getItemName(position)).toHaveText(expectedName);
    }

    private async validateItemNumber(position: number, expectedNumber: number) {
        await expect(this.getItemNumber(position)).toHaveText(expectedNumber.toString());
    }

    private async validateItemPrice(position: number, expectedPrice: number) {
        const priceText = await this.getItemPrice(position).textContent();

        if (!priceText) throw new Error('Price text not found');

        const price = priceText.substring(1); // remove "$"
        expect(price).toBe(expectedPrice.toString());
    }

    private async validateItemHasRequiredFields(position: number) {
        await expect(this.getItemName(position)).toHaveText(/.+/);
        await expect(this.getItemPrice(position)).toHaveText(/.+/);
        await expect(this.getItemImage(position)).toHaveAttribute('src', /.+/);
        await expect(this.getItemButton(position)).toBeVisible();
    }

    async validateItem(item: GridItem) {
        await this.validateItemNumber(item.position, item.position);
        await this.validateItemName(item.position, item.name);
        await this.validateItemPrice(item.position, item.price);
    }

    async validateItemsHaveRequiredFields() {
        const itemsCount = await this.gridItems.count();

        for (let i = 1; i <= itemsCount; i++) {
            await this.validateItemHasRequiredFields(i);
        }
    }
}