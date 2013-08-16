var express = require('express');
var app = express();
app.use(express.logger());

app.get('/',function(request, response) {
  response.send("Hello World");
});

var fs=require('fs');
fs.readFileSync('/index.html', function(err,data){
    if(err) throw err;
	buff=new Buffer('256');
	buff.toString('utf8',0,buff.length);
    console.log(data);
});

buff=new Buffer('256');
buff.toString('utf8',0,buff.length);

var port = process.env.PORT || 8080
 
app.listen(port, function() {
  console.log("Listening on " + port);
});
