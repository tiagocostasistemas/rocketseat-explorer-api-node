const config = require("../../../knexfile")
const knex = require("knex")

//conectando o knex com o banco de dados
const connection = knex(config.development)

module.exports = connection