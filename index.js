#!/usr/bin/env node



var es = require('./EchoServer');
var port = process.argv[3] || 5432;
var command = process.argv[2];

switch(command){
  case "start":
    es.start(port);
    break;
  case "test":
    es.test();
    break;
  case "help":
    es.help();
    break;
  default:
      es.help();
}
