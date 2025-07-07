import { test, expect } from '@playwright/test';
import { BoardPage } from '../../pages/BoardPage';

test.describe('Top bar Button', () => {

    test.beforeEach(async ({ page }) => {
        await page.goto('/'); // uses baseURL from config
    });

    test('@smoke should fullscreen when full-screen button is clicked NOT FINISHED', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        await boardPage.fullscreenButton.click();
        //wont work at the moment with the fixed width and heigh for playwright needs to be changed
    });

    test('@smoke should open profile dropdown when the full-screen button is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        await boardPage.navMenuParentButton.click();
        await expect( boardPage.navMenuPopup).toBeVisible();
    });

    test('@smoke should link when the full-screen button is clicked', async ({ page }) => {
        const boardPage = new BoardPage(page);
        await boardPage.openBoard();
        await boardPage.navMenuParentButton.click();
        await expect( boardPage.navMenuPopup).toBeVisible();
        await boardPage.navMenuHelpFeedback.click();
    });

});
