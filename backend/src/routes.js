const express = require('express'); 

const OngController = require('./controllers/OngController');
const IncidentController = require('./controllers/IncidentController');
const ProfileController = require('./controllers/ProfileController');
const SessionController = require('./controllers/SessionController');
// desacoplando o modulo de rotas do express em uma nova variavel:
const routes = express.Router();
// Criando uma sessão (login)
routes.post('/sessions', SessionController.create);
// Listagem de Ongs (chamando a função que está na controller)
routes.get('/ongs', OngController.index);
// Cadastro de ongs (chamando a função que está na controller)
routes.post('/ongs', OngController.create);

routes.get('/profile', ProfileController.index);

routes.get('/incidents', IncidentController.index);
routes.post('/incidents', IncidentController.create);
routes.delete('/incidents/:id', IncidentController.delete);


// exportar as rotas ali de dentro ^ do arquivo
module.exports = routes;