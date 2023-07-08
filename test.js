const {remote} = require('webdriverio');

const capabilities = {
  platformName: 'iOS',
  "appium:options": {
    automationName: "XCUITest",
    app: "./playground-ios-test-automation.app",
    deviceName: "iPhone 14",
    noReset: false,
  }
};

const wdOpts = {
    hostname: process.env.APPIUM_HOST || 'localhost',
    port: parseInt(process.env.APPIUM_PORT, 10) || 4723,
    logLevel: 'info',
    capabilities,
  };

  async function runTest() {
    const driver = await remote(wdOpts);
    try {
      const batteryItem = await driver.$('~Button');
      await batteryItem.click();
    } finally {
      await driver.pause(1000);
      await driver.deleteSession();
    }
  }
  
  runTest().catch(console.error);