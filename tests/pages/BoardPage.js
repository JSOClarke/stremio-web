export class BoardPage {
    constructor(page) {
        this.page = page;

        this.boardLink = page.getByRole('link', { name: 'Board' });
        this.discoverLink = page.getByRole('link', { name: 'Discover' });
        this.libraryLink = page.getByRole('link', { name: 'Library' });
        this.calendarLink = page.getByRole('link', { name: 'Calendar' });
        this.addonsLink = page.getByRole('link', { name: 'Addons' });
        this.settingsLink = page.getByRole('link', { name: 'Settings' });
        this.uniqueBoardPageElement = page.getByText('Popular - Movie');
        this.posterCard = page.getByRole('link', { name: 'The Kid' });
        this.seeAllCategoryButton = page.locator('div').filter({ hasText: /See All$/ }).getByRole('link');
        this.searchBoxPrePress = page.locator('div').filter({ hasText: /^Search or paste link$/ }).nth(1);
        this.searchBoxPostPress = page.getByRole('textbox', { name: 'Search or paste link' });
        this.fullscreenButton = page.getByTitle('Enter fullscreen mode');
        this.navMenuParentButton = page.locator('div[class*="nav-menu-popup-label"]');
        this.navMenuPopup = page.locator('div[class*="nav-menu-container"]');
        this.navMenuEnterFullscreenMode = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Enter fullscreen mode');
        this.navMenuSettings =page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Settings');
        this.navMenuAddons = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Addons');
        this.navMenuPlayUrl = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Play URL/Magnet link');
        this.navMenuHelpFeedback = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Help & Feedback');
        this.navMenuTermsOfService = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Terms of Service');
        this.navMenuPrivacyPolicy = page.locator('div[class*="nav-menu-container"]')
            .getByTitle('Privacy Policy');
        this.categories = page.locator('div[class*="meta-items-container"]');

    }
    async openNavMenu() {
        await this.navMenuParentButton.click();
        await this.page.locator('div[class*="nav-menu-container"]').waitFor({ state: 'visible' });
    }

    getPosterInCategory(index) {
        return this.categories.nth(index).locator('a[class*="button-container"]').first();
    }
    async goTo() {
        await this.page.goto('https://localhost:8080/');
    }

    async openBoard() {
        await this.boardLink.click();
    }

    async openDiscover() {
        await this.discoverLink.click();
    }

    async openLibrary() {
        await this.libraryLink.click();
    }

    async openCalendar() {
        await this.calendarLink.click();
    }

    async openAddons() {
        await this.addonsLink.click();
    }

    async openSettings() {
        await this.settingsLink.click();
    }

}
