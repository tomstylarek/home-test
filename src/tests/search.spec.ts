import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('Search Page', () => {
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        await searchPage.visit();
    });

    test('Search success', async () => {
        await searchPage.search('automation');
        await searchPage.validateResultFor('automation');
    });

    test('Search empty', async () => {
        await searchPage.search('');
        await searchPage.validateResultFor('');
    });
});