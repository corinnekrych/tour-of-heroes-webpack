exports.config = {
  baseUrl: 'http://localhost:4200/',

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  // use this, if your webdriver always starts to run selenium locally
  //seleniumAddress: 'http://'+process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@ondemand.saucelabs.com:80/wd/hub',

  // use this if you started the reverse tunnel from saucelabs (saucelabs connect),
  // see https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect+Proxy
  seleniumAddress: 'http://'+process.env.SAUCE_USERNAME+':'+process.env.SAUCE_ACCESS_KEY+'@localhost:4445/wd/hub',

  allScriptsTimeout: 60000,
  getPageTimeout: 60000,

  specs: [
    './dist/out-tsc-e2e/**/*.e2e-spec.js'
  ],

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  /**
   * We test against the MINIMUM supported version and BLEEDING EDGE, according to
   * https://angular.io/docs/ts/latest/guide/browser-support.html
   */
  multiCapabilities: [
    // Android (4.4) - Default Browser
    {
      name: '[Mobile] Android 4.4 Default Browser',
      browserName: 'Browser',
      platformVersion: '4.4',
      platformName: 'Android',
      deviceName: 'Android Emulator',
      deviceOrientation: 'portrait',
      shardTestFiles: true,
      maxInstances: 25
    },

    // Android Bleeding Edge (5.1) - Default Browser
    // There's no Emulator at saucelabs for 6.0 yet
    {
      name: '[Mobile] Android 5.1 Default Browser',
      browserName: 'Browser',
      platformVersion: '5.1',
      platformName: 'Android',
      deviceName: 'Android Emulator',
      deviceOrientation: 'portrait',
      shardTestFiles: true,
      maxInstances: 25
    },

    // iOS Mobile - we'll stick to the newest, since most updates
    // for Apple iOS don't cost.
    {
      name: '[Mobile] iPhone 7 Safari',
      browserName: 'Safari',
      platformVersion: '10.0',
      platformName: 'iOS',
      deviceName: 'iPhone 7 Simulator',
      deviceOrientation: 'portrait',
      shardTestFiles: true,
      maxInstances: 25
    },

    // Desktop Firefox for shits and giggles
    {
      name: "[Deskop] OS-X 10 Firefox 32",
      browserName: 'firefox',
      version: '32',
      platform: 'OS X 10.10',
      shardTestFiles: true,
      maxInstances: 25
    },

    // Desktop IE for shits and giggles
    {
      name: "[Deskop] Windows 10 Edge 14",
      browserName: 'MicrosoftEdge',
      platform: 'Windows 10',
      version: '14.14393',
      shardTestFiles: true,
      maxInstances: 25
    },

    // Desktop Chrome for shits and giggles
    {
      name: "[Deskop] Windows 10 Chrome 56",
      browserName: 'chrome',
      platform: 'Windows 10',
      version: '56',
      shardTestFiles: true,
      maxInstances: 25
    }
  ],

  useAllAngular2AppRoots: true,

  onComplete: function() {
    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Tour Of Heroes E2E");
  }
};
