var express=require('express');
var url=require('url');

var app=express();

app.get('/',function(req,res){
	
	res.send("Hello! World");
	res.end();
});


app.listen(8080);
