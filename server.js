var express=require('express');

var app=express();

app.get('/',function(req,res){

	res.writeHead(200,{"Content-Type":"text/plain"});
	res.send("Hello! World");
	res.end();
});


app.listen(8000);
