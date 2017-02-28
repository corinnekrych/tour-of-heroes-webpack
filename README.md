# Tour Of Heroes

* Install dependencies: `npm i`


## Local e2e-testing

* Run server: `npm start`
* Run e2e-tests in another console: `npm run e2e`


## SauceLabs e2e-testing

SauceLabs (specifically the used Appium library) currently has a problem with mobile iOS and https connections. For the time being, you MUST use a http-only url in `./protractor.conf.saucelabs.js` as baseUrl.

* `export SAUSE_USERNAME="<your-username>"`
* `export SAUCE_ACCESS_KEY="<your-access-key"`
* `npm run e2eSauceLabs`

Alternatively, run it as a one-off command without export:

* `SAUSE_USERNAME="<your-username>" SAUCE_ACCESS_KEY="<your-access-key" npm run e2eSauceLabs`


## SauceLabs connect e2e-testing (reverse tunnel)

see above for current limitations.

* export SAUSE_USERNAME="<your-username>"
* export SAUCE_ACCESS_KEY="<your-access-key"
* download and unpack SauceLabs connect: [https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect+Proxy](https://wiki.saucelabs.com/display/DOCS/Setting+Up+Sauce+Connect+Proxy)
* start with `sc --user <your-user> --api-key <your-access-key>`
* change the setting 'seleniumAddress' in `protractor.conf.saucelabs.js` to 'localhost' instead of 'ondemand.saucelabs.com'
* run tests: `./node_modules/.bin/protractor ./protractor.conf.saucelabs.js`
