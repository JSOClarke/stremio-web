import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';

test.describe('Top bar Button', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('@smoke should fullscreen when full-screen button is clicked NOT FINISHED', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        console.log('[TopBar] Clicking fullscreen button');
        await boardPage.fullscreenButton.click();
        // Won’t work in headless mode due to fixed viewport
    });

    test('@smoke should open profile dropdown when the full-screen button is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        await boardPage.openNavMenu();
        console.log('[TopBar] Verifying profile dropdown is visible');
        await expect(boardPage.navMenuPopup).toBeVisible();
    });

    test('Log-in Sign up buttton navigates or opens up login/setup', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Login/Signup');
        await expect(boardPage.navMenuLoginSignup).toBeVisible();
        await boardPage.navMenuLoginSignup.click();
        await expect(page).toHaveURL(/intro|login|signup/i);
        console.log(`[NavMenu] URL after Login/Singup click: ${page.url()}`);
    });


    test('Enter Fullscreen button is visible and clickable', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Enter Fullscreen');
        await expect(boardPage.navMenuEnterFullscreenMode).toBeVisible();
        await boardPage.navMenuEnterFullscreenMode.click();
        console.log(`[NavMenu] URL after fullscreen click: ${page.url()}`);
    });

    test('Settings button navigates or opens settings', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Settings');

        await boardPage.navMenuSettings.click();
        await expect(page).toHaveURL(/settings/i);
        console.log(`[NavMenu] Navigated to: ${page.url()}`);
    });

    test('Addons button navigates to Addons', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Addons');

        await boardPage.navMenuAddons.click();
        await expect(page).toHaveURL(/addons/i);
        console.log(`[NavMenu] Navigated to: ${page.url()}`);
    });

    test('Play URL button opens or navigates to Play screen', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Play URL/Magnet link');

        await boardPage.navMenuPlayUrl.click();
        await expect(page).toHaveURL(/url|magnet/i);
        console.log(`[NavMenu] Navigated to: ${page.url()}`);
    });

    test('Terms of Service opens ToS page (handles new tab)', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Terms of Service');

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            boardPage.navMenuTermsOfService.click(),
        ]);

        await newPage.waitForLoadState();
        console.log(`[NavMenu] New tab URL: ${newPage.url()}`);

        await expect(newPage).toHaveURL(/tos/i);

        await newPage.close();
        await page.bringToFront();
    });

    test('Help & Feedback opens help section (handles new tab)', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Help & Feedback');

        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'),
            boardPage.navMenuHelpFeedback.click(),
        ]);

        await newPage.waitForLoadState();
        console.log(`[NavMenu] New tab URL: ${newPage.url()}`);

        await expect(newPage).toHaveURL(/hc|zendesk/i);

        await newPage.close();
        await page.bringToFront();
    });


    test('Privacy Policy opens policy page (handles new tab)', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openNavMenu();
        console.log('[NavMenu] Clicking: Privacy Policy');

        // Wait for the new page (tab) to open when clicking
        const [newPage] = await Promise.all([
            page.context().waitForEvent('page'), // Listen for new tab
            boardPage.navMenuPrivacyPolicy.click(), // Trigger click that opens new tab
        ]);

        await newPage.waitForLoadState();
        console.log(`[NavMenu] New tab URL: ${newPage.url()}`);

        await expect(newPage).toHaveURL(/privacy/i);

        // Optionally close new tab and switch back to original page
        await newPage.close();
        await page.bringToFront();
    });


    });
