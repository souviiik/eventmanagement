'use strict'

const errorCodes = require('./error_codes.json');

let getErrorDetails = function (status, code, err) {
	console.log('error', err);
	let message;

	if (err === undefined || err === null) {
		message = errorCodes['GenericError'][code];
	} else if (err.name === 'ValidationError') {
		//let m = err.details.map(d => d.message);		
		//message = m[0];
		
		for (let field in err.errors) {	
			
			switch (err.errors[field].name) {
				case 'ValidatorError':
					switch (err.errors[field].kind.toLowerCase()) {
						case 'required':
							message = [field] + ' is required!';
							break;						
						case 'enum':
							message = 'Invalid ' + [field] +'!';
							break;
						default :
							message = err.errors[field].message;
							break;
					}
					break;
				
				case 'CastError':
					switch (err.errors[field].kind.toLowerCase()) {
						case 'string':
							message = [field] + ' must be a string!';
							break;						
						case 'number':
							message = [field] + ' must be a number!';
							break;
						case 'date':
							message = [field] + ' must be a valid date!';
							break;
						case 'objectid':
							message = [field] + ' is not valid!';
							break;
					}
					break;
				case 'CustomError':
					switch (err.errors[field].kind) {
						case 'ALREADY_EXIST':
							message = [field] +' already exist!';
							break;
						case 'ENTITY_NOT_FOUND':
							message = [field] +' is not found!';
							break;
						case 'REQUIRED':
							message = [field] +' is required!';
							break;
					}
					break;
			}
			
		}
		
	} else if (err.name === 'MongoError') {
		message = errorCodes['MongoError'][code];
	} else {
		message = 'Internal server error.'
	}

	const error = { status: status, error: message };

	return error;
};


const errorParser = {
	getErrorDetails
};

module.exports = errorParser;