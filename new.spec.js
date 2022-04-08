// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const chrome = require('selenium-webdriver/chrome');
const service = new chrome.ServiceBuilder('C:\\WebDriver\\bin\\chromedriver.exe');
const assert = require('assert');

describe('new', function() {
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
  async function waitForWindow(timeout = 2) {
    await driver.sleep(timeout)
    const handlesThen = vars["windowHandles"]
    const handlesNow = await driver.getAllWindowHandles()
    if (handlesNow.length > handlesThen.length) {
      return handlesNow.find(handle => (!handlesThen.includes(handle)))
    }
    throw new Error("New window did not appear before timeout")
  }
  it('new', async function() {
    await driver.get("http://admin-test.kokiska.cz/")
    // 2 | click | css=.row-orders:nth-child(1) strong | 
    await driver.findElement(By.css(".row-orders:nth-child(1) strong")).click()
    // 3 | storeWindowHandle | root | 
    vars["root"] = await driver.getWindowHandle()
    // 4 | click | xpath=//table[@id='items']/tbody/tr/td/table/tbody/tr/td[2]/div/a | 
    vars["windowHandles"] = await driver.getAllWindowHandles()
    // 5 | selectWindow | handle=${tab1} | 
    await driver.findElement(By.xpath("//table[@id=\'items\']/tbody/tr/td/table/tbody/tr/td[2]/div/a")).click()
    // 6 | storeText | css=tr:nth-child(5) > td:nth-child(2) | weight
    vars["tab1"] = await waitForWindow(2000)
    // 7 | echo | ${weight} | 
    await driver.switchTo().window(vars["tab1"])
    // 8 | close |  | 
    vars["weight"] = await driver.findElement(By.css("tr:nth-child(5) > td:nth-child(2)")).getText()
    // 9 | selectWindow | handle=${root} | 
    console.log(vars["weight"])
    await driver.close()
    await driver.switchTo().window(vars["root"])
  })
})
