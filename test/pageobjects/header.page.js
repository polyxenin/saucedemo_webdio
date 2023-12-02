const {
    $
} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for page header
 */
class HeaderPage extends Page {

    get burgerMenuButton() {
        return $('#react-burger-menu-btn');
    }

    get burgerMenu() {
        return $('//*[@class="bm-menu-wrap"]');
    }

    get burgerMenuCloseButton() {
        return $('#react-burger-cross-btn');
    }

    get cartLink() {
        return $('//a[@class="shopping_cart_link"]');
    }
    
    get cartQuantity() {
        return $('//*[@id="shopping_cart_container"]/a/span');
    }
    
    get emptyCart() {
        return $('//*[@id="shopping_cart_container"]/a');
    }
    
    async clickCart() {
        await this.cartLink.click();
    }

    async openBurgerMenu() {
        await this.burgerMenuButton.click();
    }

    async closeBurgerMenu() {
        await this.burgerMenuCloseButton.click();
    }

}



module.exports = new HeaderPage();