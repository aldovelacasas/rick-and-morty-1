const express = require('express');
const morgan = require('morgan');
const router = require('./routes/index')
const server = express();






server.use(express.json());
server.use(morgan('dev'));



server.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  response.header('Access-Control-Allow-Credentials', 'true');
  response.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
    );
    response.header(
      'Access-Control-Allow-Methods',
      'GET, POST, OPTIONS, PUT, DELETE'
      );
      next();
    });
    
    server.use("/rickandmorty", router);


    module.exports = server;