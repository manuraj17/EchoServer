var EchoServer = {}

EchoServer.test = function(){
  console.log("Hello, World!");
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

  server.listen(port||'5432',function(){
    console.log("Echo started, listening for connections...\n");
  });

}

module.exports = EchoServer;
