#!/usr/bin/env node

/**
 * tty.js
 * Copyright (c) 2012-2014, Christopher Jeffrey (MIT License)
 */

function run_cmd(cmd, args, callBack ) {
    var spawn = require('child_process').spawn;
    var child = spawn(cmd, args);
    var resp = "";

    child.stdout.on('data', function (buffer) { resp += buffer.toString() });
    child.stdout.on('end', function() { callBack (resp) });
}

process.title = 'tty.js';
var fs = require('fs');

var tty = require('../');
app = tty.createServer({
    shell: '/sbin/nologin'
});

app.get('/api/containers', function(req, res){
    run_cmd( 'docker', ['ps', '--format={{.Names}}'],
        function(text) { res.send(text.split("\n").filter(String)) });
});

app.listen();
