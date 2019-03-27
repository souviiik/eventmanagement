'use-strict'

const async = require('async');
const jwt = require('jsonwebtoken');
const Joi = require('joi');
const errorParser = require('../utils/error_parser');
const messageText = require('../utils/message.json');
const config = require('../utils/util').getConfig();
//const UserValidationSchema = require('../validation_schema/user');
const Users = require('../models/Users');

//Create User
/*const addUser = (req, res) => {

	try {

		let newUserData = req.body;

		let validateUser = function (cb) {
			Joi.validate({ email: newUserData.email, password: newUserData.password }, UserValidationSchema.userSignUpSchema, function (err, value) {
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

			newUserData.role = 'user';
			let user = new UserModel(newUserData);

			user.save(function (err, userData) {
				if (err) {
					let error = errorParser.getErrorDetails(status = 200, code = 5000, err);
					cb(error);
				} else {
					cb(null, userData);
				}
			});
		};

		//Create token
		let issueToken = function (userData, cb) {

			jwt.sign({ id: userData._id }, config.JWT.SECRET, { expiresIn: '1h' }, function (err, token) {

				if (err) {
					let error = errorParser.getErrorDetails(status = 401, code = 6002, err);
					cb(error);
				} else {
					cb(null, token);
				}

			});
		};

		async.waterfall([
			validateUser,
			saveToDB,
			issueToken
		], function (err, result) {

			if (err !== null) {
				res.status(err.status).send(err.message)
			} else {
				res.status(200).cookie('token', result, { httpOnly: true }).send('Profile created.');
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

const login = (req, res) => {

	try {

		const { email, password } = req.body;

		let validateUser = function (cb) {
			Joi.validate({ email: email, password: password }, UserValidationSchema.userSignInSchema, function (err, value) {
				if (err !== null) {
					let error = errorParser.getErrorDetails(status = 200, code = 4000, err);
					cb(error);
				} else {
					cb(null);
				}

			});
		};

		let findUser = function (cb) {

			UserModel.findOne({ email }, function (err, user) {
				if (err) {
					let error = errorParser.getErrorDetails(status = 500, code = 6000, err);
					cb(error);
				} else if (!user) {
					let error = errorParser.getErrorDetails(status = 401, code = 6001, null);
					cb(error);
				} else {
					user.isCorrectPassword(password, function (err, same) {
						if (err) {
							let error = errorParser.getErrorDetails(status = 500, code = 6000, err);
							cb(error);
						} else if (!same) {
							let error = errorParser.getErrorDetails(status = 401, code = 6001);
							cb(error);
						} else {
							// Issue token
							jwt.sign({ id: user._id }, config.JWT.SECRET, { expiresIn: '1h' }, function (err, token) {
								if (err) {
									let error = errorParser.getErrorDetails(status = 401, code = 6002, err);
									cb(error);
								} else {
									cb(null, token, user);
								}
							});
						}
					});
				}
			});
		};

		async.waterfall([
			validateUser,
			findUser
		], function (err, token, user) {
			if (err !== null) {
				res.status(err.status).send(err.message)
			} else {
				res.status(200).cookie('token', token, { httpOnly: true }).send(`Welcome ${user.email}.`);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};

//Logout user
const logout = (req, res) => {

	try {
		let id = req.id;

		jwt.sign({ id: id, iat: Math.floor(Date.now() / 1000) - 65 }, config.JWT.SECRET, function (err, token) {
			res.status(200).cookie('token', token, { httpOnly: true }).send(`Successfully logged out.`);
		});

	} catch (err) {
		res.status(500).send(err)
	}
};

//Share profile data
const profile = (req, res) => {

	try {

		let id = req.id;

		let findUser = function (cb) {
			UserModel
				.findOne({
					_id: id
				}, { password: 0 })
				.then(userData => {
					cb(null, userData);
				})
				.catch(err => {
					cb(err);
				});
		}

		async.waterfall([
			findUser
		], function (err, result) {
			if (err !== null) {
				res.status(err.status).send(err.message)
			} else {
				res.status(200).send(result);
			}
		});

	} catch (err) {
		res.status(500).send(err)
	}

};*/


const userCtrl = {
	//addUser,
	//login,
	//logout,
	//profile	
};


module.exports = userCtrl;