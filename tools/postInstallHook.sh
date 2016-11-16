#!/bin/sh

if [ "$NODE_ENV" = production ];
  then echo "production" && npm run clean && npm run build && npm run migrate && npm run seed;
fi

if [ "$NODE_ENV" = test ];
  then echo "test" && npm run migrate && npm run seed;
fi

