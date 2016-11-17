#!/bin/sh
# GIT pre-push-hook as safety measure before pushing to origin

RED='\033[0;31m'
BLUE='\033[0;34m'
NC='\033[0m'

function log {
  printf "\n\n $1 \n\n";
  exit 1;
}

npm run test
if [ "$?" != "0" ]; then
  log "${RED}Not permitted to push. Fix above issues.${NC}";
fi

log "${BLUE}GOOD TO GO${NC}";



