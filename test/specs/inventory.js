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

        all_prices_text = await InventoryPage.productPrices.map(function(element) {
            return element.getText()
        });

        all_prices = all_prices_text.map(function(price) {
            return parseFloat(price.replace('$', ''))
        });

        all_prices_ordered = _.orderBy(all_prices, [], ['asc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price ascending is not applied");
    })


    it('Sort products by price (high to low) ', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await InventoryPage.select('hilo');

        all_prices_text = await InventoryPage.productPrices.map(function(element) {
            return element.getText()
        });

        all_prices = all_prices_text.map(function(price) {
            return parseFloat(price.replace('$', ''))
        });

        all_prices_ordered = _.orderBy(all_prices, [], ['desc']);

        expectChai(_.isEqual(all_prices, all_prices_ordered)).to.equal(true, "Sort products by price descending is not applied");
    })


    it('Sort products by name (a to z) ', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('az');

        all_products = await InventoryPage.productTitles.map(function(element) {
            return element.getText()
        });

        all_products_ordered = _.orderBy(all_products, [], ['asc']);
        
        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name ascending is not applied");

    })


    it('Sort products by name (z to a) ', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');

        await InventoryPage.select('za');

        all_products = await InventoryPage.productTitles.map(function(element) {
            return element.getText()
        });

        all_products_ordered = _.orderBy(all_products, [], ['desc']);

        expectChai(_.isEqual(all_products, all_products_ordered)).to.equal(true, "Sort products by name descending is not applied");
    })

})