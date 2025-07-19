import { test } from '@playwright/test';
import { GridPage } from '../pages/GridPage';
import { GridItem } from '../types/GridItem';

test.describe('Grid Page', () => {
    let gridPage: GridPage;

    test.beforeEach(async ({ page }) => {
        gridPage = new GridPage(page);
        await gridPage.visit();
    });

    test('Grid item', async () => {
        const item: GridItem = {
            position: 7,
            name: "Super Pepperoni",
            price: 10
        }

        await gridPage.validateItem(item);
    });

    test('All grid items', async () => {
        await gridPage.validateItemsHaveRequiredFields();
    });
});