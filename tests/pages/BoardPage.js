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
