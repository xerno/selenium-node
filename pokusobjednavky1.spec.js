// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('pokus-objednavky1', function() {
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
  it('pokus-objednavky1', async function() {
    await driver.get("http://admin-test.kokiska.cz/")
    await driver.findElement(By.css("#snippet-orders-ajax-sort strong")).click()
    await driver.findElement(By.linkText("vytvoření")).click()
    await driver.findElement(By.id("page")).click()
    vars["x"] = await driver.findElements(By.xpath("//*/table/tbody/tr/td/table/tbody/tr/td[3]/span[1]")).length
    console.log(vars["x"])
    vars["today"] = await driver.executeScript("var d = new Date(); var m = ((d.getMonth() + 1) < 10) ? \'0\' + (d.getMonth() + 1) : (d.getMonth() + 1); var day = (d.getDate() <10) ? \'0\' + (d.getDate()) : (d.getDate());return day + \'.\'+ m + \'.\' + d.getFullYear();")
    console.log(vars["today"])
    vars["q"] = await driver.executeScript("var q = document.querySelectorAll(\"#snippet-orders-list > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1)\"); return q")
    vars["a"] = await driver.executeScript("let a = arguments[0][1]", vars["q"])
    vars["q[0]"] = await driver.executeScript("arguments[0][0] = \'document.querySelector(\"#snippet-orders-list > table > tbody > tr:nth-child(1) > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1)\")\'; return arguments[0][0]", vars["q"])
    console.log(vars["a"])
    console.log(vars["q"][0])
    vars["h"] = await driver.executeScript("console.log(JSON.stringify(arguments[0],[1]))", vars["q"])
    console.log(vars["h"])
    console.log(vars["dates"])
    vars["dates"] = await driver.executeScript("const dates = document.querySelectorAll(\"#snippet-orders-list > table > tbody > tr > td > table > tbody > tr:nth-child(1) > td:nth-child(3) > span:nth-child(1)\")")
  })
})
