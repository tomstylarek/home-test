import { expect } from "@playwright/test";
import { BasePage } from "./BasePage";
import { Routes } from "../constants/Routes";

export class HomePage extends BasePage {
    private readonly welcomeMessageContainer = this.page.locator('#welcome-message');
    private readonly username = this.page.locator('[data-id=username]');

    async checkWelcomeMessage(username: string) {
        await expect(this.welcomeMessageContainer).toContainText('Welcome!');
        await expect(this.username).toHaveText(username);
    }

    override async visit() {
        await this.page.goto(Routes.Home);
    }
}