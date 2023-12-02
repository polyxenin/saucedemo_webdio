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

    get productsButtons() {
        return $$('//div[@class="pricebar"]/button');
    }
    
    async addProductToCart(productName) { 

        await this.productsButtons.forEach(async element => {
            if(await element.getAttribute('name') ===  'add-to-cart-'+ productName){
                element.click();
            }
        });        
    }

    async removeProductFromCart(productName) {
        
        await this.productsButtons.forEach(async element => {
            console.log(await element.getAttribute('id'))
            if(await element.getAttribute('name') ===  'remove-'+ productName){
                element.click();
            }
        });
    }
}

module.exports = new InventoryPage();