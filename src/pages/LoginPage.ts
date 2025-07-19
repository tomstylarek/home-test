import { Routes } from "../constants/Routes";
import { BasePage } from "./BasePage";
import { expect } from '@playwright/test';

export class LoginPage extends BasePage {
    private readonly usernameInput = this.page.locator('#username');
    private readonly passwordInput = this.page.locator('#password');
    private readonly signInButton = this.page.locator('#signin-button');
    private readonly formErrorMessage = this.page.locator('#message');

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.signInButton.click();
    }

    async assertOnErrorMessage(text: string) {
        await expect(this.formErrorMessage).toContainText(text);
    }

    override async visit() {
        await this.page.goto(Routes.Login);
    }
}