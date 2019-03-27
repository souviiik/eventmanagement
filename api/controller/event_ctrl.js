'use-strict'

const async = require('async');
const Joi = require('joi');
const config = require('../utils/util').getConfig();
const responseParser = require('../utils/response_parser');
const errorParser = require('../utils/error_parser');
const messageText = require('../utils/message.json');
const EventValidationSchema = require('../validation_schema/event');
const Events = require('../models/Events');

const getEvents = (req, res) => {

	try {	

		let page = req.params.page;			
		if(page === undefined){
			page = 0;
		}else{
			page = parseInt(page -1);
		}
		let offset = parseInt(page * config.PAGE_OFFSET);
		let limit = parseInt(config.PAGE_LIMIT);
		//console.log('offset',offset);
		//console.log('limit',limit);

		let getTotalRecords = function (cb) {
			Events
				.count()
				.then(data => {
					cb(null, data);
				})
				.catch(err => {
					cb(err);
				});
		}

		let getAllEvents = function (recordCount, cb) {
			Events
				.find({}).sort('createdAt').skip(offset).limit(limit)
				.then(data => {
					let compositeRecord = {recordCount: recordCount, events: data}
					cb(null, compositeRecord);
				})
				.catch(err => {
					cb(err);
				});
		}

		async.waterfall([
			getTotalRecords,
			getAllEvents
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Events successfully loaded.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};


const addEvents = (req, res) => {

	try {

		let newEventData = req.body;

		let validateEvent = function (cb) {
			Joi.validate({ name: newUserData.name, type: newUserData.type, length: newUserData.length }, UserValidationSchema.userSignUpSchema, function (err, value) {
				if (err !== null) {
					let error = errorParser.getErrorDetails(status = 200, code = 4001, err);
					cb(error);
				} else {
					cb(null);
				}

			});
		};

		//Save user to MongoDB
		let saveToDB = function (cb) {
			
			let user = new Events(newEventData);

			user.save(function (err, data) {
				if (err) {
					let error = errorParser.getErrorDetails(status = 200, code = 5000, err);
					cb(error);
				} else {
					cb(null, data);
				}
			});
		};		

		async.waterfall([
			//validateEvent,
			saveToDB
		], function (err, result) {

			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Event created successfully.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

const getEventById = (req, res) => {

	try {		

		let id = req.params.id;			

		let getEvent = function (cb) {
			Events
				.findOneAndUpdate({_id: id}, { $inc: { views: 1 } }, {new: true },function(err, data) {
					if (err) {
						console.log('vv00',err)
						cb(err);
					} else {
						console.log('vv11',data)
						cb(null, data);
					}})
				.catch(err => {
					cb(err);
				});				
		}

		async.waterfall([			
			getEvent
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Events details successfully loaded.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

const removeEventById = (req, res) => {

	try {

		let id = req.params.id;

		let removeEvent = function (cb) {
			Events
				.deleteOne({_id: id})
				.then(data => {
					if(data.ok === 1 && data.deletedCount === 1){
						cb(null, messageText['EventDeleted']);
					}else{
						let error = errorParser.getErrorDetails(status = 403, code = 6003);
						cb(error);						
					}					
				})
				.catch(err => {
					cb(err);
				});
		}

		async.waterfall([
			removeEvent
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Event deleted successfully.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

const bulkDeleteEvent = (req, res) => {

	try {

		let ids = req.body.event_ids;
		console.log('ww11',JSON.stringify(ids));

		let removeEvent = function (cb) {
			Events
				.deleteMany({_id: { $in: ids}})
				.then(data => {
					console.log('ww22',data);
					if(data.ok === 1 && data.deletedCount !== undefined){
						cb(null, messageText['EventDeleted']);
					}else{
						let error = errorParser.getErrorDetails(status = 403, code = 6003);
						cb(error);						
					}					
				})
				.catch(err => {
					cb(err);
				});
		}

		async.waterfall([
			removeEvent
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Events deleted successfully.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

const updateEventById = (req, res) => {

	try {

		let id = req.params.id;
		const { name, type, length, views } = req.body;
    	let updObj = {name: name, type: type, length: length, views: views};
		console.log('aa33',id, updObj)

		let updateEvent = function (cb) {
			Events
				.updateOne({_id: id}, updObj)
				.then(data => {
					console.log('aa44', data)
					if(data.ok === 1 && data.nModified === 0){
						cb(null, messageText['EventNoModificationFound']);
					}else if(data.ok === 1 && data.nModified === 1){
						cb(null, messageText['EventModified']);
					}else{
						let error = errorParser.getErrorDetails(status = 403, code = 6003);
						cb(error);						
					}				
				})
				.catch(err => {
					cb(err);
				});
		}

		async.waterfall([
			updateEvent
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err)
			} else {
				let resData = responseParser.processResponseData(status = 200, data = result, 'Event  successfully updated.');
				res.status(200).send(resData);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};


const eventCtrl = {	
	getEvents,
	addEvents,
	getEventById,
	updateEventById,
	removeEventById,
	bulkDeleteEvent
};


module.exports = eventCtrl;