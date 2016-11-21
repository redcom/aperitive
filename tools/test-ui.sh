#!/bin/sh
# RUN integration tests and acceptance tests

RED='\033[0;31m'
NC='\033[0m'
BLUE='\033[0:34m'

printf "${RED}STOP selenium ${NC}\n"
npm run kill-selenium

printf "${BLUE}START selenium ${NC}"
./tools/start-selenium.sh & 2>&1

printf "${BLUE} RUN UI tests ${NC}\n"
./node_modules/.bin/wdio wdio.conf.js
