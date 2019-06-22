#!/bin/bash
nodemon -w . -e js,json,yaml,sh,py -x ./devWrapper.sh -- $@ ; sleep 1
