import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';
import { CATEGORY_COUNT } from '../../config/constants';
test.describe('movie selection', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('should navigate to specific movie when see movie card is selected', async ({ page }) => {

        const boardPage = new BoardPage(page);

        for (let i = 0; i < CATEGORY_COUNT; i++) {
            const poster = boardPage.getPosterInCategory(i);
            const title = await poster.getAttribute('title');

            await poster.click();

            await page.waitForLoadState('domcontentloaded'); // or tailor to your routing system

            const url = page.url();
            expect(page).toHaveURL(/detail/);
            console.log(`[Poster Nav] "${title}" → ${url}`);

            await page.goBack();
        }
    });
});
