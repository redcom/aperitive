#!/bin/sh

echo $NODE_ENV

if [ "$NODE_ENV" = production ];
  then npm run clean && npm run build && npm run migrate && npm run seed;
fi

if [ "$NODE_ENV" != production ] && [ ! -f "dev-db.sqlite3" ];
  then npm run migrate && \ # create new sqlite database
    npm run seed && \ # populate information into database
    ./node_modules/.bin/selenium-standalone install; # install selenium drivers to run integration tests
fi
