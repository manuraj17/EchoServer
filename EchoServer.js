var EchoServer = {}

EchoServer.test = function(){
  console.log("Hello, World! - EchoServer Test - The module is loaded fine!");
}

EchoServer.help = function(){
  console.log("EchoServer start <port> [default port: 5432]");
}

EchoServer.start = function(port){
  var net = require('net');
  var server = net.createServer();

  server.on('connection', function(c){
    //console.log('connected');

    console.log("Client connected");
    c.write("\nWelcome to the Echo Server\n\n");

    c.on('data', function(data){
      //c.write("Echo : "+data);
      c.write(data);
    });

    c.on('end', function(){
      console.log("Client exited\n");
    });
  });

  server.listen(port, function(){
    console.log("Echo started, listening for connections on %s...\n", server.address().port );
  });

  server.on('error', function (e) {

    if (e.code == 'EADDRINUSE') {
      console.log('Address in use, retrying...');
      setTimeout(function () {
        server.close();
        server.listen(port);
      }, 1000);
    }else if (e.code = 'EACCESS') {
      console.log("Unable to use the port, please change..")
    }

    //console.log(e);
  });


}

module.exports = EchoServer;
