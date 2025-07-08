import { test, expect } from '@playwright/test';
import { DiscoverPage } from '../../pages/DiscoverPage';

test.describe('Filter Buttons functionality', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/#/discover'); // uses baseURL from config
    });

    test('should filter to Series when Series is selected in genre menu dropdown', async ({ page }) => {
        const discoverPage = new DiscoverPage(page);
        await expect(discoverPage.filteredItems).toBeVisible();
        const itemCountbefore = await discoverPage.filteredItems.count();
        console.log(`Number of items before filter selecltion: ${itemCountbefore}`);
        await discoverPage.genreFilterMenu.click();
        await discoverPage.genreFilterMenu.getByText('Series').click();
        expect(page).toHaveURL(/series/);
        // await expect(discoverPage.posterOutput).toHaveCount(5);
    });

    test('should filter to Channel when Channel is selected in genre menu dropdown', async ({ page }) => {
        const discoverPage = new DiscoverPage(page);
        await discoverPage.genreFilterMenu.click();
        await discoverPage.genreFilterMenu.getByText('Channel').click();

        // Won’t work in headless mode due to fixed viewport
    
    });
});