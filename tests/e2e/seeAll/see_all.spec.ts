import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';
test.describe('Main Container see all Links', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('should navigate to Discover Page when see all link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        // console.log(categoryButtonsCount);
// Wait for at least one See All link to appear
        await boardPage.seeAllCategoryButton.first().waitFor({ state: 'visible' });

// Now safely get count
        const count = await boardPage.seeAllCategoryButton.count();
        for (let index = 0; index < count; index++) {
            await boardPage.seeAllCategoryButton.nth(index).click();
            await expect(page).toHaveURL(/discover/);
            console.log(`Button index ${index} navigated to URL: ${page.url()}`);
            await page.goto('/');
        }
    });
});
