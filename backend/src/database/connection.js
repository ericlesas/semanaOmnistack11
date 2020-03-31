const knex = require ('knex');
const configuration = require('../../knexfile');

// criando conexão com o banco
const connection = knex(configuration.development);

//Exportar de dentro desse arquivo a conexão com o banco de dados
module.exports = connection;