'use strict'

exports.getConfig = () => {
    let env = process.env.NODE_ENV || 'local';
    env = env.toLowerCase();
    return require(`../config/config.${env}.json`);
};