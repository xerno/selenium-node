const {Builder, By, Key, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const service = new chrome.ServiceBuilder('C:\\WebDriver\\bin\\chromedriver.exe');

//const {assert} = require('chai');
//const Capabilities = require('selenium-webdriver/lib/capabilities')
        //.Capabilities;
//const capabilities = Capabilities.chrome();
//capabilities.set('marionette', true);

let driver;
let vars;

var pokus = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

describe('Test', async () => {
    let driver = await new Builder().forBrowser('chrome').build();
    const title = await driver.getTitle();
    //assert.equal(title, 'Kokiskashop.cz');
    console.log('bla 123');
            }
        );    

before(async() => {
driver
        .get('http://anezka.pulkrtova:tha2Z3FK@admin-test.kokiska.cz/')
        .then( () => driver.get('http://admin-test.kokiska.cz/') );
}
        );


