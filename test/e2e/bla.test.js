const {describe} = require('mocha');
const {assert} = require('chai');
const webdriver = require('selenium-webdriver');
const Capabilities = require('selenium-webdriver/lib/capabilities')
        .Capabilities;
const capabilities = Capabilities.chrome();
capabilities.set('marionette', true);

let driver;

describe('Test', async () => {
    describe('When verifying the blog title', () => {
        it('should be equil to Automation Playground', async() => {
            const title = await driver.getTitle();
            assert.equal(title, 'Kokiskashop.cz');
        });
    });
});
before(async() => {
    driver = await new webdriver.Builder()
            .withCapabilities(capabilities).build();
    driver.get("http://test.kokiskashop.cz");
});
after(async() => {
    await driver.quit();
});