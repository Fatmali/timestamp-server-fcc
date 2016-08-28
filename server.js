var express=require('express');
var time=require('./time');
var app=express();

var path    = require("path");
var port = process.env.PORT || 8080;

app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/index.html'));
});

app.get('/:date',function(req,res){

	var date=req.params.date;
	var response="empty";

	//if date is unix date
	if(/^\d{1,30}$/.test(date)){
		response=JSON.stringify(time.translateunix(date));
	
	}
	



	//if date is natural language

	if(/(January|February|March|April|May|June|July|August|September|October|November|December)\s(\d\d?),\s(\d\d\d\d)/.test(date)){
		console.log(date);
		response=JSON.stringify(time.translatenatural(date));
		


}

	res.send(response);
	res.end();
});


app.listen(8080);

