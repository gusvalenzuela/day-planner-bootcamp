"use strict"
let modules = [require("./note"), require("./user")]
const Sequelize = require("sequelize")
const env = process.env.NODE_ENV || "development"
const config = require(__dirname + "/../config/config.js")[env]
const db = {}

let sequelize

// the application is executed on the local machine ... use mysql
if (config.use_env_variable) {
	sequelize = new Sequelize(process.env[config.use_env_variable], config)
} else {
	sequelize = new Sequelize(
		config.database,
		config.username,
		config.password,
		config,
	)
}

modules.forEach(module => {
	const model = module(sequelize, Sequelize, config)
	db[model.name] = model
})

Object.keys(db).forEach(modelName => {
	if (db[modelName].associate) {
		db[modelName].associate(db)
	}
})

db.sequelize = sequelize
db.Sequelize = Sequelize

module.exports = db
