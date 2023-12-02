const items = require('../../resources/data/inventory_items.json');

const _ = require('lodash');
const expectChai = require('chai').expect;

const LoginPage = require('../pageobjects/login.page');
const CartPage = require('../pageobjects/cart.page');

describe('Cart Page', () => {

    /* beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('add product to cart', async () => {

        await CartPage.addProductToCart('sauce-labs-backpack');
        await expect(CartPage.cartQuantity).toHaveText("1");

        await CartPage.removeProductFromCart('sauce-labs-backpack');
        //await browser.pause(10000)

    });

    it('remove product from cart', async () => {

        await CartPage.removeProductFromCart('sauce-labs-backpack');
        await expect(CartPage.emptyCart).toHaveText("");
    }); */

    // it('add 2 products to cart and then remove 1', async () => {
    // });

})