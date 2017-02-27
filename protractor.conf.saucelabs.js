exports.config = {
  allScriptsTimeout: 30000,
  getPageTimeout: 60000,

  sauceUser: process.env.SAUCE_USERNAME,
  sauceKey: process.env.SAUCE_ACCESS_KEY,

  specs: [
    './e2e/start-page.e2e-spec.js'
  ],

  onPrepare: function(){
      var caps = browser.getCapabilities()
  },

  multiCapabilities: [{
    browserName: 'firefox',
    version: '32',
    platform: 'OS X 10.10',
    name: "firefox-tests",
    shardTestFiles: true,
    maxInstances: 25
  }/*, {
    browserName: 'chrome',
    version: '41',
    platform: 'Windows 7',
    name: "chrome-tests",
    shardTestFiles: true,
    maxInstances: 25
  }*/],

  useAllAngular2AppRoots: true,
  baseUrl: 'http://test.kumbier.it/ngtoh/',

  onComplete: function() {
    var printSessionId = function(jobName){
      browser.getSession().then(function(session) {
        console.log('SauceOnDemandSessionID=' + session.getId() + ' job-name=' + jobName);
      });
    }
    printSessionId("Insert Job Name Here");
  }
};
