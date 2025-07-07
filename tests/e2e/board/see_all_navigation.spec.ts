import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';
import { CATEGORY_COUNT } from '../../config/constants';
test.describe('Main Container see all Links', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('should navigate to Discover Page when see all link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);

        for (let index = 0; index < CATEGORY_COUNT; index++) {
            await boardPage.seeAllCategoryButton.nth(index).click();
            await expect(page).toHaveURL(/discover/);
            console.log(`Button index ${index} navigated to URL: ${page.url()}`);
            await page.goBack();
        }
    });
});
