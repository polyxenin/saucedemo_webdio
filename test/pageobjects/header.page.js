const {
    $
} = require('@wdio/globals')
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for page header
 */
class HeaderPage extends Page {

    get burgerMenu() {
        return $('#react-burger-menu-btn');
    }

    get resetAppLink() {
        return $('#reset_sidebar_link');
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

    async clickBurgerMenu() {
        await this.burgerMenu.click();
    }

    async clickResetAppLink() {
        await this.resetAppLink.click();
    }

}



module.exports = new HeaderPage();