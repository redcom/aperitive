#!/bin/sh

echo $NODE_ENV

if [ "$NODE_ENV" = production ];
  then npm run clean && npm run build && npm run migrate && npm run seed;
fi

if [ "$NODE_ENV" != production ];
  then npm run migrate && npm run seed;
fi

