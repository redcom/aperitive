#!/bin/sh
# kill selenium standalone.

kill -n 15 $( lsof -i:4444 -t  ) 2>/dev/null
echo "STOP selenium"
