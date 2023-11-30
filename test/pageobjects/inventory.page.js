const {
    $
} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for inventory page
 */
class InventoryPage extends Page {
    /**
     * define selectors using getter methods
     */
    get dropdown() {
        return $('//*[@class="product_sort_container"]');
    }

    get productTitles() {
        return $$('//div[@class="inventory_item_name "]');
    }

    get productPrices() {
        return $$('//div[@class="inventory_item_price"]');
    }

    async select(value) {
        await this.dropdown.selectByAttribute('value', value)
    }
}

module.exports = new InventoryPage();