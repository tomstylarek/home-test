import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ErrorMessages } from '../constants/ErrorMessages';
import { credentials } from '../data/credentials';

test.describe('Login tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });
    
    test('User logs in successfully', async ({ page }) => {
        const homePage = new HomePage(page);

        await loginPage.login(credentials.valid.username, credentials.valid.password);
        await homePage.checkWelcomeMessage(credentials.valid.username);
    });

    test('User login failure: wrong credentials', async () => {
        
        await loginPage.login(credentials.invalid.username, credentials.invalid.password);
        await loginPage.assertOnErrorMessage(ErrorMessages.LoginWrongCredentials);
    });

    test('User login failure: blank credentials', async () => {
        
        await loginPage.login(credentials.empty.username, credentials.empty.password);
        await loginPage.assertOnErrorMessage(ErrorMessages.LoginEmptyFields);
    });
})