#!/bin/sh

#report coverage to codacy-coverage service
./node_modules/.bin/codacy-coverage < ./coverage/lcov.info -t 4c3cae3042484b739e1d7f786d5b136a
rm -rf ./coverage

