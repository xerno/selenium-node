const {Builder, By, Key, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('C:\\WebDriver\\bin\\chromedriver.exe');

(async function example() {
    let driver = await new Builder().forBrowser('chrome').setChromeService(service).build();
    try {
        await driver.get('https://www.kokiskashop.cz/');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('Kokiskashop.cz - mé internetové obchodní centrum'), 1000);
        console.log("vše se povedlo");
    } catch (e) {
        console.log("vyskytla se nějaká chyba", e);
    } finally {
        console.log("a tady končíme");
        await driver.quit();
    }
})();
