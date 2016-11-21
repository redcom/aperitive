# Integration tests using webdriver.io

## Stack
* selenium-standalone https://github.com/vvo/selenium-standalone

* webdriverio https://github.com/webdriverio/webdriverio/

* Mocha https://mochajs.org/

* Chai https://chaijs.com ( test are written in Chai with es6  )

* Sinon https://sinonjs.org ( generates random units for testing  )

## Write tests
Integration/Accepance tests are to be written into **./test/specs/** folder. This tests contains interaction between different components/ui elements which are not subject of bussiness logic.

## Run tests

  ```
  npm run test-ui
  ```

###It performs the following tasks:

* Stop Selenium using script **./tools/kill-selenium.sh**
* Start **./tools/test-ui.sh** which starts the selenium again and runs test suite

###Known issues
* If chromedriver is not running when starting selenium-standalone than you need to specify its version
Check **./tools/start-selenium.sh**

## Selenium hub
List of running instances: **http://127.0.0.1:4444/wd/hub/static/resource/hub.html**





