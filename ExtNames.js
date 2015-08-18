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

