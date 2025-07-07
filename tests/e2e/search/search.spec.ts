import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';
test.describe('Main Search Functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('should search when term is inputted', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.searchBoxPrePress.click();
        await expect(page).toHaveURL(/search/);
        await boardPage.searchBoxPostPress.fill('land of the free');
        await boardPage.searchBoxPostPress.press('Enter');
    });

});
