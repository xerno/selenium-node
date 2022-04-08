const {assert} = require('chai');
const webdriver = require('selenium-webdriver');
const Capabilities = require('selenium-webdriver/lib/capabilities')
        .Capabilities;
const capabilities = Capabilities.chrome();
capabilities.set('marionette', true);

let driver;




const {Builder, By, Key, until} = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('C:\\WebDriver\\bin\\chromedriver.exe');

var pokus = require('mocha').describe;
var pre = require('mocha').before;
var assertions = require('mocha').it;
var assert = require('chai').assert;

testCase('Array', function () {
  pre(function () {
    // ...
  });

  testCase('#indexOf()', function () {
    assertions('should return -1 when not present', function () {
      assert.equal([1, 2, 3].indexOf(4), -1);
    });
  });
});