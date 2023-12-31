const items = require('../../resources/data/inventory_items.json');

const _ = require('lodash');
const expectChai = require('chai').expect;

const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');
const HeaderPage = require('../pageobjects/header.page');

describe('Inventory Page', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    it('sort products by price (low to high) ', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.select('lohi');

        all_prices_text = await InventoryPage.productsPrices.map(element => element.getText());
        all_prices = all_prices_text.map(price => parseFloat(price.replace('$', '')));
        all_prices_ordered = _.orderBy(all_prices, [], ['asc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price ascending is not applied");
    })


    it('sort products by price (high to low)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.select('hilo');

        all_prices_text = await InventoryPage.productsPrices.map(element => element.getText());
        all_prices = all_prices_text.map(price => parseFloat(price.replace('$', '')));
        all_prices_ordered = _.orderBy(all_prices, [], ['desc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price descending is not applied");
    })


    it('sort products by name (a to z)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('az');

        all_products = await InventoryPage.productsTitles.map(element => element.getText());
        all_products_ordered = _.orderBy(all_products, [], ['asc']);
        
        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name ascending is not applied");

    })


    it('sort products by name (z to a)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('za');

        all_products = await InventoryPage.productsTitles.map(element => element.getText());
        all_products_ordered = _.orderBy(all_products, [], ['desc']);

        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name descending is not applied");
    })

    it('sort products by name (z to a) for problem_user', async () => {
        await LoginPage.login('problem_user', 'secret_sauce');

        await InventoryPage.select('za');

        all_products = await InventoryPage.productsTitles.map(element => element.getText());
        all_products_ordered = _.orderBy(all_products, [], ['desc']);

        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name descending is not applied");
    })


    // We can repeat this test for every element (name, description, price) in product component
    it('product images are displayed correctly for standard_user', async () => {

        await LoginPage.login('standard_user', 'secret_sauce');

        all_images = await InventoryPage.productsImages.map(element => element.getAttribute('src'));
        all_images_expected = items.map(i => i.image);

        expectChai(_.isEqual(all_images, all_images_expected)).to.equal(true, "Product images are not displayed correctly for standard_user");

    });

    it('product images are displayed correctly for problem_user', async () => {

        await LoginPage.login('problem_user', 'secret_sauce');
        all_images = await InventoryPage.productsImages.map(element => element.getAttribute('src'));
        all_images_expected = items.map(i => i.image);
        
        expectChai(_.isEqual(all_images, all_images_expected)).to.equal(true, "Product images are not displayed correctly for problem_user");

    });

    it('add the first product to cart', async () => {

        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.addProductToCart('sauce-labs-backpack');

        await expect(HeaderPage.cartQuantity).toHaveText("1");

        await InventoryPage.removeProductFromCart('sauce-labs-backpack');

    });

    it('remove the first product from cart', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.removeProductFromCart('sauce-labs-backpack');
        
        await expect(HeaderPage.emptyCart).toHaveText("");
    });

    it('go to cart when clicking cart icon', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await HeaderPage.clickCart();

        await expect(browser).toHaveUrl('https://www.saucedemo.com/cart.html');
    });

})