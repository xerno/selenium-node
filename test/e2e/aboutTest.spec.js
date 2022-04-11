// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver');

const chrome = require('selenium-webdriver/chrome');
const webdriver = require('selenium-webdriver');
const service = new chrome.ServiceBuilder('C:\\WebDriver\\bin\\chromedriver.exe');
//const assert = require('assert')

var aboutTest = require('mocha');
var describe = aboutTest.describe;
var it = aboutTest.it;
var assert = require('chai').assert;

describe('aboutTest', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(async function() {
    driver = await new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(async function() {
    await driver.quit();
  })
  it('aboutTest', async function() {
    await driver.get("https://www.kokiskashop.cz/cz/o-firme/")
    assert(await driver.getTitle() == "O firmě | Kokiskashop.cz")
    {
      const elements = await driver.findElements(By.xpath("//h1[@class=\'page__title page__title--about\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//html/body/section/div[1]/div[1]/div[2]/p[@class=\'page__text\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__title page__title--about-sub\']"))
      assert(elements.length)
    }
    vars["listAboutSize"] = await driver.findElements(By.xpath("//*[@class=\'list list--about\']")).length
    console.log(vars["listAboutSize"])
    assert(vars["listAboutSize"].toString() == "3")
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__info-pic\'][contains(@src, \'/public/images/about-page__info.png\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__title page__title--gray\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//html/body/section/div[2]/div[1]/div[2]/p[@class=\'page__text\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//html/body/section/div[2]/div[2]/div[1]/div/h2[@class=\'page__title\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'box-like-card__content\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page-contact__title page-contact__title--about\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".page-contact__title"))
      assert(elements.length)
    }
    vars["contactPointSize"] = await driver.findElements(By.xpath("//*[@class=\'page-contact__point\']")).length
    assert(vars["contactPointSize"].toString() == "3")
    await driver.findElement(By.xpath("//span[contains(.,\'na nejčastější dotazy.\')]")).click()
    vars["faqurl"] = await driver.executeScript("return window.location.href")
    assert(vars["faqurl"].toString() == "https://www.kokiskashop.cz/cz/nejcastejsi-otazky-a-odpovedi/")
  })
})
