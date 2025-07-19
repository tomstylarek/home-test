import { expect } from "@playwright/test";
import { Routes } from "../constants/Routes";
import { BasePage } from "./BasePage";

export class SearchPage extends BasePage {
    private readonly searchInput = this.page.locator('form > input[name=searchWord]');
    private readonly submitButton = this.page.locator('button[type=submit]');
    private readonly resultContainer = this.page.locator('.result-container');

    override async visit() {
        await this.page.goto(Routes.Search);
    }

    async search(text: string) {
        await this.searchInput.fill(text);
        await this.submitButton.click();
    }

    async validateResultFor(search: string) {
        const result = this.resultContainer.locator('#result');

        if (search != '') {
            await expect(result).toHaveText('Found one result for ' + search);
        } else {
            await expect(result).toHaveText('Please provide a search word.');
        }
    }
}