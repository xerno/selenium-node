var test = require('selenium-webdriver/testing'),
        webdriver = require('selenium-webdriver'),
        until = require('selenium-webdriver').until;

var test = require('mocha');
var {describe, it} = require('mocha');
var assert = require('chai').assert;



test.describe('Simple test', function () {
    var driver;
    
    test.before(function () {
        driver = new webdriver.Builder().forBrowser(webdriver.Browser.Chrome).build();
    });
    
    test.it('should find correct title', function () {
        driver.get("http://www.netbeans.org");
        // checking that page title contains word 'NetBeans'
        driver.wait(until.titleContains('NetBeans'), 1000);
    });
    
    test.after(function () {
        driver.quit();
    });
});
