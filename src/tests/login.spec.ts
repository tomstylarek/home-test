import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { HomePage } from '../pages/HomePage';
import { ErrorMessages } from '../constants/ErrorMessages';
import { TestCredentials } from '../constants/TestCredendials';

test.describe('Login tests', () => {
    let loginPage: LoginPage;

    test.beforeEach(async ({ page }) => {
        loginPage = new LoginPage(page);
        await loginPage.visit();
    });
    
    test('User logs in successfully', async ({ page }) => {
        const homePage = new HomePage(page);

        await loginPage.login(TestCredentials.Valid.username, TestCredentials.Valid.password);
        await homePage.checkWelcomeMessage(TestCredentials.Valid.username);
    });

    test('User login failure: wrong credentials', async () => {
        
        await loginPage.login(TestCredentials.Invalid.username, TestCredentials.Invalid.password);
        await loginPage.assertOnErrorMessage(ErrorMessages.LoginWrongCredentials);
    });

    test('User login failure: blank credentials', async () => {
        
        await loginPage.login(TestCredentials.Empty.username, TestCredentials.Empty.password);
        await loginPage.assertOnErrorMessage(ErrorMessages.LoginEmptyFields);
    });
})