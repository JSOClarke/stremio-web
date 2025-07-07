import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';

test.describe('Top bar Button', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/#/discover'); // uses baseURL from config
    });

    test('@smoke should fullscreen when full-screen button is clicked NOT FINISHED', async ({ page }) => {

        await page.locator('div[class*="multiselect-menu"]').nth(1).click();
        // Won’t work in headless mode due to fixed viewport
    });
});