'use-strict'

const Joi = require('joi');

const userSignUpSchema = Joi.object().keys({
	email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().label("Password")
});

const userSignInSchema = Joi.object().keys({
	email: Joi.string().email({ minDomainAtoms: 2 }).required().label("Email"),
	password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/).required().label("Password")
});


const userSchema = {
	userSignUpSchema,
	userSignInSchema
};

module.exports = userSchema;