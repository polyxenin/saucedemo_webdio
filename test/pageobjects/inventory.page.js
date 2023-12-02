const {
    $
} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for inventory page
 */
class InventoryPage extends Page {
    
    get dropdown() {
        return $('//*[@class="product_sort_container"]');
    }

    get productsTitles() {
        return $$('//div[@class="inventory_item_name "]');
    }

    get productsPrices() {
        return $$('//div[@class="inventory_item_price"]');
    }

    get productsImages() {
        return $$('//div[@class="inventory_item_img"]/a/img');
    }

    async select(value) {
        await this.dropdown.selectByAttribute('value', value)
    }
}

module.exports = new InventoryPage();