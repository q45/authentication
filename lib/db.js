var mongoose = require('mongoose');
var Schema = mongoose.Schema;

module.exports.mongoose = mongoose;
module.exports.Schema = Schema;

//connect to cloud database
var username = "quintin";
var password = "samita45";
var address = "@ds043027.mongolab.com:43027/stock"
connect();

function connect() {
	var url = "mongodb://" + username + ':' + password + address;
	mongoose.connect(url);
}

function disconnect() {mongoose.disconnect()}