#!/bin/sh
set +x
#Start selenium with specific driver.
#This script is designed to find the installed chrome driver version and use it to start the selenium-standalone

CHROME_DRIVER=$(ls ./node_modules/selenium-standalone/.selenium/chromedriver/*-chromedriver)
VERSION=$(echo $CHROME_DRIVER | sed -ne 's/[^0-9]*\(\([0-9]\.\)\{0,4\}[0-9][^.]\).*/\1/p')

printf " with chromedriver: \033[\0;34m${VERSION} \033[0m \n"
./node_modules/.bin/selenium-standalone start --drivers.chrome.version=${VERSION}


