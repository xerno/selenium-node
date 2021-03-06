// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('dopravaplatbaTest', function() {
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
  it('dopravaplatbaTest', async function() {
    await driver.get("https://test.kokiskashop.cz//cz/doprava-a-platba/")
    assert(await driver.getTitle() == "Poštovné | Kokiskashop.cz")
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__title\']"))
      assert(elements.length)
    }
    assert(await driver.findElement(By.css(".page__title")).getText() == "Doprava a platba")
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__subtitle\'][1]"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__text\'][1]"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'postage__icon\'][@src=\'https://img.kokiskashop.cz/post/logo-ceska-posta-small.png\']"))
      assert(elements.length)
    }
    vars["ceskapostaIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__icon\'][@src=\'https://img.kokiskashop.cz/post/logo-ceska-posta-small.png\']")).length
    vars["ceskapostaTitleSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\' and contains(text(),\'Česká pošta\')]")).length
    assert(vars["ceskapostaIconSize"].toString() == "vars["ceskapostaTitleSize"]")
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'postage__icon\'][@src=\'https://img.kokiskashop.cz/post/logo-gls-small.png\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'postage__icon\'][@src=\'https://img.kokiskashop.cz/post/1634022573-815535-small.png\']"))
      assert(elements.length)
    }
    vars["postageIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__icon\']")).length
    vars["tableSize"] = await driver.findElements(By.xpath("//table")).length
    vars["postageTitleSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\']")).length
    assert(vars["postageTitleSize"].toString() == "vars["tableSize"]")
    console.log(vars["postageIconSize"])
    console.log(vars["tableSize"]. možností dopravy)
    assert(vars["postageIconSize"].toString() == "vars["tableSize"]")
    if (!!await driver.executeScript("return (arguments[0] != arguments[1])", vars["postageIconSize"],vars["tableSize"])) {
      {
        const elements = await driver.findElements(By.xpath("//html/body/div[4]/div/div/div[1]/div[1]/div/div/img"))
        assert(elements.length)
      }
      vars["cp-rukaIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][1]/div/div/img[@class=\'postage__icon\']")).length
      vars["cp-postaIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][2]/div/div/img[@class=\'postage__icon\']")).length
      vars["ttIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][3]/div/div/img[@class=\'postage__icon\']")).length
      vars["geisIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][4]/div/div/img[@class=\'postage__icon\']")).length
      vars["glsIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][5]/div/div/img[@class=\'postage__icon\']")).length
      vars["zasilkovnaIconSize"] = await driver.findElements(By.xpath("//*[@class=\'postage__item-wrapper\'][6]/div/div/img[@class=\'postage__icon\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["cp-rukaIconSize"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["cp-postaIconSize"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["ttIconSize"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["geisIconSize"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["glsIconSize"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["zasilkovnaIconSize"])) {
      }
    } else {
    }
    if (!!await driver.executeScript("return (arguments[0] !== arguments[1])", vars["postageTitleSize"],vars["tableSize"])) {
      vars["title1Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][1]")).length
      vars["title2Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][2]")).length
      vars["title3Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][3]")).length
      vars["title4Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][4]")).length
      vars["title5Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][5]")).length
      vars["title6Size"] = await driver.findElements(By.xpath("//*[@class=\'postage__title\'][6]")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title1Size"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title2Size"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title3Size"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title4Size"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title5Size"])) {
      }
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["title6Size"])) {
      }
    }
    vars["tb1Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item\'][1]/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb1Title"])
    vars["tb1RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][1]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    console.log(vars["tb1RowsSize"])
    vars["t1RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb1RowsSize"])
    console.log(vars["t1RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb1RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb1Title"] má ${t1RowsSize} řádků.")
    }
    vars["t1CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][1]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t1CategorySize"].toString() == "vars["t1RowsSize"]")
    vars["t1WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][1]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t1WeightSize"].toString() == "vars["t1RowsSize"]")
    vars["t1PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][1]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t1PriceSize"].toString() == "vars["t1RowsSize"]")
    vars["t1CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][1]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t1CashOnDeliverySize"].toString() == "vars["t1RowsSize"]")
    vars["tb2Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb2Title"])
    vars["tb2RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    console.log(vars["tb2RowsSize"])
    vars["t2RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb2RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb2RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb2Title"] má ${t2RowsSize} řádky.")
    }
    vars["t2CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t2CategorySize"].toString() == "vars["t2RowsSize"]")
    vars["t2WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t2WeightSize"].toString() == "vars["t2RowsSize"]")
    vars["t2PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t2PriceSize"].toString() == "vars["t2RowsSize"]")
    vars["t2CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][2]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t2CashOnDeliverySize"].toString() == "vars["t2RowsSize"]")
    vars["tb3Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb3Title"])
    vars["tb3RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    vars["t3RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb3RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb3RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb3Title"] má ${t3RowsSize} řádek.")
    }
    vars["t3CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t3CategorySize"].toString() == "vars["t3RowsSize"]")
    vars["t3WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t3WeightSize"].toString() == "vars["t3RowsSize"]")
    vars["t3PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t3PriceSize"].toString() == "vars["t3RowsSize"]")
    vars["t3CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][3]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t3CashOnDeliverySize"].toString() == "vars["t3RowsSize"]")
    vars["tb4Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb4Title"])
    vars["tb4RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    vars["t4RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb4RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb4RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb4Title"] má ${t4RowsSize} řádek.")
    }
    vars["t4CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t4CategorySize"].toString() == "vars["t4RowsSize"]")
    vars["t4WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t4WeightSize"].toString() == "vars["t4RowsSize"]")
    vars["t4PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t4PriceSize"].toString() == "vars["t4RowsSize"]")
    vars["t4CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][4]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t4CashOnDeliverySize"].toString() == "vars["t4RowsSize"]")
    vars["tb5Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb5Title"])
    vars["tb5RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    vars["t5RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb5RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb5RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb5Title"] má ${t5RowsSize} řádky.")
    }
    vars["t5CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t5CategorySize"].toString() == "vars["t5RowsSize"]")
    vars["t5WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t5WeightSize"].toString() == "vars["t5RowsSize"]")
    vars["t5PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t5PriceSize"].toString() == "vars["t5RowsSize"]")
    vars["t5CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][5]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t5CashOnDeliverySize"].toString() == "vars["t5RowsSize"]")
    vars["tb6Title"] = await driver.findElement(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/div/div[@class=\'postage__title\']")).getText()
    console.log(vars["tb6Title"])
    vars["tb6RowsSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/table[1]/tbody/tr[@class=\'postage__row\']")).length
    vars["t6RowsSize"] = await driver.executeScript("return Number (arguments[0]) - 1", vars["tb6RowsSize"])
    if (!!await driver.executeScript("return (arguments[0] < 1)", vars["tb6RowsSize"])) {
    } else {
      console.log("Tabulka vars["tb6Title"] má ${t6RowsSize} řádek.")
    }
    vars["t6CategorySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/table[1]/tbody/tr[@class=\'postage__row\']/td/div[@class=\'postage__category-name\']")).length
    assert(vars["t6CategorySize"].toString() == "vars["t6RowsSize"]")
    vars["t6WeightSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--right\']")).length
    assert(vars["t6WeightSize"].toString() == "vars["t6RowsSize"]")
    vars["t6PriceSize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t6PriceSize"].toString() == "vars["t6RowsSize"]")
    vars["t6CashOnDeliverySize"] = await driver.findElements(By.xpath("//div[@class=\'postage__item-wrapper\'][6]/div/table[1]/tbody/tr[@class=\'postage__row\']/td[@class=\'postage__cell postage__cell--price postage__cell--right\']")).length
    assert(vars["t6CashOnDeliverySize"].toString() == "vars["t6RowsSize"]")
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'page__note\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//body/div[4]/div[1]/div[1]/h2[2][@class=\'page__subtitle\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//select[@class=\'depot-select depot-address__select depot-address__select--wauto\']"))
      assert(elements.length)
    }
    await driver.findElement(By.css(".depot-address__select--wauto")).click()
    {
      const dropdown = await driver.findElement(By.css(".depot-address__select--wauto"))
      await dropdown.findElement(By.xpath("//option[. = 'Praha 6 - Ruzyně']")).click()
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'depot-point__point-icon\'][@src=\'https://test.kokiskashop.cz/public/images/template-images/contact//contact-adress-icon.svg\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'depot-point__txt\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'depot-point__point-icon\'][@src=\'https://test.kokiskashop.cz/public/images/template-images/contact//contact-gps-icon.svg\']"))
      assert(elements.length)
    }
    {
      const elements = await driver.findElements(By.xpath("//*[@class=\'depot-point__point-icon\'][@src=\'https://test.kokiskashop.cz/public/images/template-images/contact//contact-phone-icon.svg\']"))
      assert(elements.length)
    }
    vars["cardstext"] = await driver.findElement(By.xpath("//html/body/div[4]/div/div/ul[2]/li[1]/p")).getText()
    vars["visa"] = await driver.executeScript("var t = arguments[0]; return t.includes(\'Visa\');", vars["cardstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["visa"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/visa.svg\']"))
        assert(elements.length)
      }
      vars["visaiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/visa.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["visaiconSize"])) {
      }
    }
    vars["visaelectron"] = await driver.executeScript("var t = arguments[0]; return t.includes(\'Visa Electron\');", vars["cardstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["visaelectron"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/visa_el.svg\']"))
        assert(elements.length)
      }
      vars["visaelectroniconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/visa_el.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["visaelectroniconSize"])) {
      }
    }
    vars["mastercard"] = await driver.executeScript("var t = arguments[0]; return t.includes(\'MasterCard\');", vars["cardstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["mastercard"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/mastercard.svg\']"))
        assert(elements.length)
      }
      vars["mastercardiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/mastercard.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["mastercardiconSize"])) {
      }
    }
    vars["maestro"] = await driver.executeScript("var t = arguments[0]; return t.includes(\'Maestro\')", vars["cardstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["maestro"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/maestro.svg\']"))
        assert(elements.length)
      }
      vars["maestroiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/maestro.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["maestroiconSize"])) {
      }
    }
    vars["dinersclub"] = await driver.executeScript("var t = arguments[0]; t.includes(\'Diners Club\')", vars["cardstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["dinersclub"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/dinnersclub.svg\']"))
        assert(elements.length)
      }
      vars["dinnersclubiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/cards/dinnersclub.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["dinnersclubiconSize"])) {
      }
    }
    vars["bankstext"] = await driver.findElement(By.xpath("//html/body/div[4]/div/div/ul[2]/li[3]/p[2]")).getText()
    vars["ceskasporitelna"] = await driver.executeScript("var t = arguments[0]; t.includes(\'Česká spořitelna\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["ceskasporitelna"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/ceskasporitelna.svg\']"))
        assert(elements.length)
      }
      vars["ceskasporitelnaiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/ceskasporitelna.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["ceskasporitelnaiconSize"])) {
      }
    }
    vars["csob"] = await driver.executeScript("var t = arguments[0]; t.includes(\'ČSOB\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["csob"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/csob.svg\']"))
        assert(elements.length)
      }
      vars["csobiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/csob.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["csobiconSize"])) {
      }
    }
    vars["komercnibanka"] = await driver.executeScript("var t = arguments[0]; t.includes(\'Komerční banka\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["komercnibanka"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/kb.svg\']"))
        assert(elements.length)
      }
      vars["kbiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/kb.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["kbiconSize"])) {
      }
    }
    vars["raiffeisenbank"] = await driver.executeScript("var t =arguments[0]; t.includes(\'Raiffeisen Bank\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["raiffeisenbank"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/raiffeisen.svg\']"))
        assert(elements.length)
      }
      vars["rbiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/raiffeisen.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["rbiconSize"])) {
      }
    }
    vars["unicreditbank"] = await driver.executeScript("var t = arguments[0]; t.includes(\'UniCredit Bank\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["unicreditbank"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/unicredit.svg\']"))
        assert(elements.length)
      }
      vars["unicrediticonSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/unicredit.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["unicrediticonSize"])) {
      }
    }
    vars["postovnisporitelna"] = await driver.executeScript("var t = arguments[0]; t.includes(\'Poštovní spořitelna\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["postovnisporitelna"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/postovnisporitelna.svg\']"))
        assert(elements.length)
      }
      vars["postovnisporitelnaiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/postovnisporitelna.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["postovnisporitelnaiconSize"])) {
      }
    }
    vars["mbank"] = await driver.executeScript("var t = arguments[0]; t.includes(\'mBank\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["mbank"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/mbank.svg\']"))
        assert(elements.length)
      }
      vars["mbankiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/mbank.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["mbankiconSize"])) {
      }
    }
    vars["fiobanka"] = await driver.executeScript("var t = arguments[0]; t.includes(\'Fio banka\')", vars["bankstext"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["fiobanka"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/fio.svg\']"))
        assert(elements.length)
      }
      vars["fioiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/banks/fio.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["fioiconSize"])) {
      }
    }
    vars["otherpayments"] = await driver.findElement(By.xpath("//html/body/div[4]/div/div/ul[2]/li[4]/p")).getText()
    vars["applepay"] = await driver.executeScript("var t =arguments[0]; t.includes(\'Apple Pay\')", vars["otherpayments"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["applepay"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/other/applepay.svg\']"))
        assert(elements.length)
      }
      vars["applepayiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/other/applepay.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["applepayiconSize"])) {
      }
    }
    vars["googlepay"] = await driver.executeScript("var t =arguments[0]; t.includes(\'Google Pay\')", vars["otherpayments"])
    if (!!await driver.executeScript("return (arguments[0] = \'true\')", vars["googlepay"])) {
      {
        const elements = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/other/googlepay.svg\']"))
        assert(elements.length)
      }
      vars["googlepayiconSize"] = await driver.findElements(By.xpath("//*[@src=\'https://test.kokiskashop.cz/public/images/template-images/global/payment/other/googlepay.svg\']")).length
      if (!!await driver.executeScript("return (arguments[0] != 1)", vars["googlepayiconSize"])) {
      }
    }
  })
})
