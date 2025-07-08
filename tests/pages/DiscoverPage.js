export class DiscoverPage {
    constructor(page) {
        this.page = page;
        this.genreFilterMenu = page.locator('div[class*="multiselect-menu"]').first();
        this.filteredItems = page.locator('div[class*="meta-items-container"]').locator('a[data-index]');
    }}
