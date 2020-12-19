"use strict";

var _require = require('selenium-webdriver'),
    Builder = _require.Builder,
    By = _require.By,
    Key = _require.Key,
    util = _require.util;

(function example() {
  var driver;
  return regeneratorRuntime.async(function example$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return regeneratorRuntime.awrap(new Builder().forBrowser('firefox').build());

        case 2:
          driver = _context.sent;
          _context.prev = 3;
          _context.next = 6;
          return regeneratorRuntime.awrap(driver.get('http://www.google.com/ncr'));

        case 6:
          _context.next = 8;
          return regeneratorRuntime.awrap(driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN));

        case 8:
          _context.next = 10;
          return regeneratorRuntime.awrap(driver.wait(until.titleIs('webdriver - Google Search'), 1000));

        case 10:
          _context.prev = 10;
          _context.next = 13;
          return regeneratorRuntime.awrap(driver.quit());

        case 13:
          return _context.finish(10);

        case 14:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[3,, 10, 14]]);
})();