// importando funcionalidades do express
const express = require('express'); 
const cors = require('cors'); 
//importando rota:
const routes = require('./routes');

// Variável para armazenar a aplicação (instanciar a aplicação)
const app = express();

app.use(cors());
// transforma o body em uma requisição legivel para a aplicação 
app.use(express.json());
app.use(routes);

/**
 * Rota = conjutno completa do endereço da pagina
 * Recurso = Pagina especifica a ser acessada (normalmente associada a uma tabela no banco, ou uma entidade)
 */

/**
 * Métodos HTTP:
 * 
 * GET = Buscar/listar um informação do backend 
 * POST = Criar uma informação no backend
 * PUT = Alterar uma informação no backend 
 * Delete = Deletar uma informação no backend 
 */


 /**
  * Tipos de parâmetros:
  * 
  * Query Params: Pamaetros nomeados enviados na rota após "?" e geralmente servem para filtros e paginação
  * Route Params: Parâmetros utilizados p/ identificar recursos (um unico recurso, por exemplo: dados de um unico
  *               usuário). Acessado por "request.params"
  * Request Body: Corpo da requisição
  */

/**
 * Para fazer a conexão com o banco de dados, pode utilizar:
 * 
 * 1ª forma: instalar o driver do banco de dados, exemplo de uso: Select * from users
 * 2ª forma: Query builder, escrevar as querys usando java script: table('users').select('*').where()
 * Pro projeto sera usada a segunda opção, o query builder a ser usado, será o KNEX
 */


// Fazer a aplicação acima ouvir a porta 3333, para acessa por localhost essa aplicação
app.listen(3333);
