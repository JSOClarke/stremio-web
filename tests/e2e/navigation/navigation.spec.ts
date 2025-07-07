import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';
test.describe('SideBar Navigation Links', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('@smoke should navigate to Board page when Board link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        await expect(boardPage.uniqueBoardPageElement).toBeVisible();
    });

    test('should navigate to Discover page when Discover link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openDiscover();
        await expect(page).toHaveURL(/.*discover/i);
    });

    test('should navigate to Library page when Library link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openLibrary();
        await expect(page).toHaveURL(/.*library/i);
    });

    test('should navigate to Calendar page when Calendar link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openCalendar();
        await expect(page).toHaveURL(/.*calendar/i);
    });

    test('@smoke should navigate to Addons page when Addons link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openAddons();
        await expect(page).toHaveURL(/.*addons/i);
    });

    test('should navigate to Settings page when Settings link is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openSettings();
        await expect(page).toHaveURL(/.*settings/i);
    });

});
