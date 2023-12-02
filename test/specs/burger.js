const HeaderPage = require('../pageobjects/header.page');
const LoginPage = require('../pageobjects/login.page');

const {
    browser
} = require('@wdio/globals');

describe('Burger Menu', () => {
    beforeEach(async () => {
        await LoginPage.open();
        await LoginPage.login('standard_user', 'secret_sauce');
    });

    it('burger menu opens when the burger icon is clicked', async () => {
        await HeaderPage.openBurgerMenu();
        await expect(HeaderPage.burgerMenu).toBeDisplayed();
    });
    

    it('burger menu closes when the x icon is clicked', async () => {
        await HeaderPage.openBurgerMenu();
        await browser.pause(3000)
        await HeaderPage.closeBurgerMenu();
        await expect(HeaderPage.burgerMenu).not.toBeDisplayed();
    });

});