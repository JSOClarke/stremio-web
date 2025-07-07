export class DiscoverPage {
    constructor(page) {
        this.page = page;
        this.mediaTypeFilter = page.locator('div[class*="multiselect-menu"]');
    }

}