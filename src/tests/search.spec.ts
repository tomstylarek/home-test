import { test } from '@playwright/test';
import { SearchPage } from '../pages/SearchPage';

test.describe('Search Page', () => {
    let searchPage: SearchPage;

    test.beforeEach(async ({ page }) => {
        searchPage = new SearchPage(page);
        await searchPage.visit();
    });

    test('Search successfully and validates result', async () => {
        await searchPage.search('automation');
        await searchPage.validateResultFor('automation');
    });

    test('Search of an empty string and validates result', async () => {
        await searchPage.search('');
        await searchPage.validateResultFor('');
    });
});