/**
 * Importa express
 */
const express = require('express');

const cors = require('cors')

const { errors } = require('celebrate');
/**
 * ./routes -> referencia arquivo na mesma pasta
 */
const routes = require('./routes')

/**
 * Inicializa aplicação
 */
 const app = express();

app.use(cors())

 /**
  * Converter corpo da requisição para JSON
  */
app.use(express.json())

/**
 * Utilizar o routes
 */
app.use(routes)

/**
 * Padroniza retorno dos erros
 */
app.use(errors());

module.exports = app;

