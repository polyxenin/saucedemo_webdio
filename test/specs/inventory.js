const items = require('../../resources/data/inventory_items.json');

const _ = require('lodash');
const expectChai = require('chai').expect;

const LoginPage = require('../pageobjects/login.page');
const InventoryPage = require('../pageobjects/inventory.page');

describe('Inventory Page', () => {

    beforeEach(async () => {
        await LoginPage.open();
    });

    afterEach('clear sessionstorage', () => {
        browser.execute(() => sessionStorage.clear())
    })

    it('Sort products by price (low to high) ', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.select('lohi');

        all_prices_text = await InventoryPage.productsPrices.map(element => element.getText());
        all_prices = all_prices_text.map(price => parseFloat(price.replace('$', '')));
        all_prices_ordered = _.orderBy(all_prices, [], ['asc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price ascending is not applied");
    })


    it('Sort products by price (high to low)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.select('hilo');

        all_prices_text = await InventoryPage.productsPrices.map(element => element.getText());
        all_prices = all_prices_text.map(price => parseFloat(price.replace('$', '')));
        all_prices_ordered = _.orderBy(all_prices, [], ['desc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price descending is not applied");
    })


    it('Sort products by name (a to z)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('az');

        all_products = await InventoryPage.productsTitles.map(element => element.getText());
        all_products_ordered = _.orderBy(all_products, [], ['asc']);
        
        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name ascending is not applied");

    })


    it('Sort products by name (z to a)', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('za');

        all_products = await InventoryPage.productsTitles.map(element => element.getText());
        all_products_ordered = _.orderBy(all_products, [], ['desc']);

        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name descending is not applied");
    })


    // We can repeat this test for every element (name, description, price) in product component
    it('Products images appearance for standard_user', async () => {

        await LoginPage.login('standard_user', 'secret_sauce');

        all_images = await InventoryPage.productsImages.map(element => element.getAttribute('src'));
        all_images_expected = items.map(i => i.image);

        expectChai(_.isEqual(all_images, all_images_expected)).to.equal(true, "Product images are not displayed correctly for standard_user");

    });

    it('Product images appearance for problem_user', async () => {

        await LoginPage.login('problem_user', 'secret_sauce');
       
        all_images = await InventoryPage.productsImages.map(element => element.getAttribute('src'));
        all_images_expected = items.map(i => i.image);
        
        expectChai(_.isEqual(all_images, all_images_expected)).to.equal(true, "Product images are not displayed correctly for problem_user");

    });

})