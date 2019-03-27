'use-strict'

const Joi = require('joi');

const eventAddSchema = Joi.object().keys({
	name: Joi.string().min(3).max(24).required().label("Event name"),
	type: Joi.string().required().label("Event type"),
	length: Joi.number().integer().min(10).max(1000).required().label("Event length")
});

const eventSchema = {
	eventAddSchema
};

module.exports = eventSchema;