var express = require('express');
var app = express();
var csv = require( "fast-csv" );
var csv1 = require("csv");
var request = require('request');

//Ajax funcction will call this function in node js /getCurrencyData is the route
app.get('/getCurrencyData', function(req, res) {
    var combination = [];
    var url = 'http://webrates.truefx.com/rates/connect.html?f=csv';
    // The URL contains data in csv format so we are using fast-csv to read data from that link
    csv.fromStream(request(url))
      .on("data", function(data){
        // There are multiple records and we need only some data from that as stated in requirement so adding only that data to the array
        var finalData = [];
        for (i = 0; i< data.length; i++){
        	if (i == 0 || i == 4 || i == 5){
                if(data[i].length > 0)
        		  finalData.push(data[i]);
        	}
        }
        //Adding all records inside another array
        combination.push(finalData);
        
	}).on("end", function(){
         console.log("Sending Data");
         //Sending data to the Ajax call
         res.header("Access-Control-Allow-Origin", "*");
         res.send(combination);
    });;
    
});
//Port on which this application will run
app.listen(1337);