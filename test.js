var es = require('./EchoServer');

es.test();
es.usage();
port = process.argv[2];
es.start(port);
