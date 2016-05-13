#!/bin/bash

RECORD_DIR=$1/../static/records

if [ ! -d $RECORD_DIR ]; then
	mkdir $RECORD_DIR
fi

asciinema rec $RECORD_DIR/record-$2-`date +%Y-%m-%d.%H:%M:%S`.json -q -c "docker exec -it $2 /bin/bash" -w 1
sleep 10