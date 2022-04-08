// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('kosik_3krok', function() {
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
  async function cartCredentials() {
    vars["name_surname"] = "Anežka Pulkrtová"
    vars["email"] = "anezka.pulkrtova@kokiska.cz"
    vars["phone"] = "724576230"
  }
  it('kosik_3krok', async function() {
    CartCredentials()
    await driver.get("https://test.kokiskashop.cz//cz/kosik/informace-o-vas/")
    {
      const elements = await driver.findElements(By.css(".page-cart__title"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".cart-form__half > .page-cart__subtitle"))
      assert(elements.length)
    }
    {
      const element = await driver.findElement(By.id("name"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("email"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("tel"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("dstreet"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("dstreetnum"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("dcity"))
      assert(await element.isEnabled())
    }
    {
      const element = await driver.findElement(By.id("dzip"))
      assert(await element.isEnabled())
    }
    await driver.findElement(By.id("saveOrder")).click()
    {
      const elements = await driver.findElements(By.css(".cart-form__error-global-title"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("terms_error"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".alert_name_text"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".alert_email"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.css(".alert_tel_text"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("terms_label"))
      assert(elements.length)
    }
    await driver.findElement(By.id("terms_label")).click()
    await driver.findElement(By.id("name")).sendKeys(vars["name_surname"])
    await driver.findElement(By.id("email")).sendKeys(vars["email"])
    await driver.findElement(By.id("tel")).sendKeys(vars["phone"])
    await driver.findElement(By.css("#terms_label > .ajax")).click()
    await driver.wait(until.elementLocated(By.css(".page__title--conditions")), 30000)
    await driver.findElement(By.id("Layer_1")).click()
    {
      const elements = await driver.findElements(By.css(".cart-form__info:nth-child(5)"))
      assert(elements.length)
    }
    await driver.findElement(By.css(".cart-form__info > .ajax")).click()
    await driver.wait(until.elementLocated(By.css(".page__title")), 30000)
    await driver.findElement(By.id("Layer_1")).click()
    {
      const elements = await driver.findElements(By.css(".cart-buttons__button--gray"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.id("saveOrder"))
      assert(elements.length)
    }
    await driver.findElement(By.id("saveOrder")).click()
  })
})
