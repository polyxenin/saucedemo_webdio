const cases = require('../../resources/data/error_login_cases.json');
const LoginPage = require('../pageobjects/login.page');
const {
    browser
} = require('@wdio/globals');

describe('Login Page', () => {
    beforeEach(async () => {
        await LoginPage.open();
    });

    afterEach('clear sessionstorage', () => {
        browser.execute(() => sessionStorage.clear());
    });

    it('allows user to log in with valid credentials', async () => {
        await LoginPage.login('standard_user', 'secret_sauce');
        await expect(browser).toHaveUrl('https://www.saucedemo.com/inventory.html');
    });

    cases.forEach((item) => {
        it(`displays an error message for ${item.description} (${item.username})`, async () => {
            await LoginPage.login(item.username, item.password);
            await expect(LoginPage.errorDiv).toHaveText(item.message);
        });
    });
});