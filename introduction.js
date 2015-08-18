// Filtering array
var numbers=[1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

var filtered = numbers.filter(function evenNumbers (number) {
  		return number % 2 === 0;
	}
);
console.log(filtered);

var http = require('http');

//---------------------------------------------------

var server = http.createServer(function(req, res) {
  res.writeHead(200);
  res.end('Hello Http');
});

server.listen(8080);

//---------------------------------------------------

var extNames = require('./ExtNames.js')
//var logToConsole = require('./ExtNames.js')

extNames(process.argv[2],process.argv[3],logResults);

function logResults(err,data) {
	if(err )  return console.error('There was an error:', err)

  	data.forEach(logToConsole);
}

function logToConsole(data) {
	console.log(data);
}
//+++++++++++++++++++++++++++
var fs = require('fs');
var path = require('path');

//module.exports = extNames,logToConsole;

module.exports = extNames;

function extNames(dir,ext,callback) {
if(dir!=null){
	fs.readdir(dir,finishReading); 
}else {
	console.error('Enter dir name');
}

function finishReading(err, list) {
	if (err) return callback(err);
	var filtered = list.filter(function (item) {
	  	return ext === path.extname(item).substring(1);
	});
	callback(null,filtered);
	}
}
//++++++++++++++++++++++++++++++++


