var express = require('express');
var app = express();
var csv = require( "fast-csv" );
var csv1 = require("csv");
var request = require('request');

app.get('/getCurrencyData', function(req, res) {
    var combination = [];
    var url = 'http://webrates.truefx.com/rates/connect.html?f=csv';
    csv.fromStream(request(url))
      .on("data", function(data){
        
        var finalData = [];
        for (i = 0; i< data.length; i++){
        	if (i == 0 || i == 4 || i == 5){
                if(data[i].length > 0)
        		  finalData.push(data[i]);
        	}
        }
        combination.push(finalData);
        
	}).on("end", function(){
         console.log("Sending Data");
         res.header("Access-Control-Allow-Origin", "*");
         res.send(combination);
    });;
    
});
app.listen(1337);