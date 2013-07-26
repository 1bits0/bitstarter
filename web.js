var express = require('express');
var fs = require('fs');
var app = express.createServer(express.logger());


app.use(express.static(__dirname + '/public'));
app.get('/', function(request, response) {


var buf=fs.readFileSync("./index.html");
var hello=buf.toString();

  response.send(hello);
//  response.send('Hello World 2!');
});

var port = process.env.PORT || 8080;
app.listen(port, function() {
  console.log("Listening on " + port);
});
