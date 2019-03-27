'use strict'

const errorCodes = require('./error_codes.json');

let processResponseData = function (status, data, msg) {	
	
	let resData = { status: status, message: msg, data: data };
	return resData;
};


const responseParser = {
	processResponseData
};

module.exports = responseParser;