
var http = require('http');
var fs = require('fs');
var logToConsole = require('./ExtNames.js')



 console.log(process.argv[2]);
if(process.argv[2]===undefined)console.log('enter port');
else{

	var server = http.createServer(function (req, res) {
	   // request handling logic...


		var readStream = fs.createReadStream(process.argv[3]);
		readStream.on('open', function () {
	    // This just pipes the read stream to the response object (which goes to the client)
	    	readStream.pipe(res);
	  	});


		res.on('data', function(data) {
			  		console.log(data);
		});

		readStream.on('error', function(err) {
    		res.end(err);
  		});


	 })


	 server.listen(Number(process.argv[2]));

	 server.on('error', function(e) {
		  		//console.log("Got data: " + data);
		  		console.log(e.message);
	})

}
