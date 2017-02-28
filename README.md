# Tour Of Heroes (Webpack and SauceLabs edition)

This is the Angular2 [Tour-of-Heroes](https://angular.io/docs/ts/latest/tutorial/) tutorial, but using webpack instead of SystemJS. I also added a loader indicator and e2e-testing examples for [SauceLabs](https://saucelabs.com/).

## Usage

* Install dependencies: `npm i`
* Run via `npm start`


## e2e-testing

e2e or end-to-end testing is the uppermost layer of a testing hierarchy and tests business requirements from the end-user-perspective.


### Local e2e-testing

* Run server: `npm start`
* Run e2e-tests in another console: `npm run e2e`


### Remote e2e-testing

* Build the distribution: `npm run build`
* upload to your webspace
* change the url in the `package.json`-task 'e2eRemote' to your public webspace
* Run e2e-tests: `npm run e2eRemote`


## SauceLabs

If you also want to test your software on mobile browsers or a variant of desktop browsers, there are providers like [SauceLabs](https://www.saucelabs.com), which provide an external cloud to test on.

SauceLabs (specifically the used Appium library) currently has a problem with mobile iOS and https connections. For the time being, you MUST use a http-only url in `./protractor.conf.sauce-labs.js` as baseUrl, if you plan to use mobile iOS browsers.

You will need a [SauceLabs-Account](https://saucelabs.com/signup/trial) and an API-key, which you can find in your account settings after logging in.


## SauceLabs Remote e2e-testing

You need to upload the distribution to a publically available webspace, if your computer is not reachable from the internet because of being behind a router or firewall.

* build the distribution: `npm run build`
* upload to your webspace
* change the url in `protractor.conf.sauce-labs.js` to your public webspace
* `export SAUSE_USERNAME="<your-username>"`
* `export SAUCE_ACCESS_KEY="<your-access-key"`
* `npm run e2eSauceLabs`

Alternatively, combine the last three steps in a one-off command without export:

* `SAUSE_USERNAME="<your-username>" SAUCE_ACCESS_KEY="<your-access-key>" npm run e2eSauceLabs`


## SauceLabs Connect e2e-testing (reverse tunnel)

If you do not have a webspace or your system requires access to resources on your local network, the remote option above will not work for you. SauceLabs has the ability to register a reverse tunnel, making your local network available to the SauceLabs VMs.

* download and unpack SauceLabs connect: [https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect+Proxy](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect+Proxy)
* start with `sc --user=<your-user> --api-key=<your-access-key> --no-ssl-bump-domains=all`
* `export SAUSE_USERNAME="<your-username>"`
* `export SAUCE_ACCESS_KEY="<your-access-key"`
* run tests: `npm run e2eSauceLabsConnect`

*Note:* The `--no-ssl-bump-domains=all` fixes a bug with missing root-certificates for Android emulators of versions below 5.1 - see [this entry]() for details. This is also needed, if your local system does *not* use https, because the first website the Android browser opens will be google.com and that certificate will already trigger a hard-to-skip warning message.
