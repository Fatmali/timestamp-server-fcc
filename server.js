var express=require('express');
var mongo=require('mongodb').MongoClient;
var time=require('./time');
var url='mongodb://localhost:27017/timestampdb'
var app=express();

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

