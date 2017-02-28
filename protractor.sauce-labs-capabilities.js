module.exports = [

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
  }

  // Android (4.4) - Default Browser
  // WARNING (2017-02-28)
  //   At the moment, the default browser opens up https://www.google.com, but
  //   the browser does not have the necessary root-certificates installed, so
  //   a warning message appears which currently cannot be easily discarded.
  /*,{
    name: '[Mobile] Android 4.4 Default Browser',
    browserName: 'Browser',
    platformVersion: '4.4',
    platformName: 'Android',
    deviceName: 'Android Emulator',
    deviceOrientation: 'portrait',
    shardTestFiles: true,
    maxInstances: 25
  }*/

  // iOS Mobile Safari
  ,{
    name: '[Mobile] iPhone 7 Safari',
    browserName: 'Safari',
    platformVersion: '10.0',
    platformName: 'iOS',
    deviceName: 'iPhone 7 Simulator',
    deviceOrientation: 'portrait',
    shardTestFiles: true,
    maxInstances: 25
  }

  // Desktop Firefox for shits and giggles
  /*,{
    name: "[Deskop] OS-X 10 Firefox 32",
    browserName: 'firefox',
    version: '32',
    platform: 'OS X 10.10',
    shardTestFiles: true,
    maxInstances: 25
  },*/

  // Desktop IE for shits and giggles
  /*,{
    name: "[Deskop] Windows 10 Edge 14",
    browserName: 'MicrosoftEdge',
    platform: 'Windows 10',
    version: '14.14393',
    shardTestFiles: true,
    maxInstances: 25
  },*/

  // Desktop Chrome for shits and giggles
  /*,{
    name: "[Deskop] Windows 10 Chrome 56",
    browserName: 'chrome',
    platform: 'Windows 10',
    version: '56',
    shardTestFiles: true,
    maxInstances: 25
  }*/
];
