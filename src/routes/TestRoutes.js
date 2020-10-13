const express = require('express');
const testRoutes = express.Router();
const testController = require('../controllers/TestController');

testRoutes.get('/test', testController.findAll);
testRoutes.post('/test', () => testController.create);
testRoutes.get('/test/:id', (req, res)=> testController.findOne(req, res));
testRoutes.put('/test/:id', () => testController.update);
testRoutes.delete('/test/:id', () => testController.delete);

module.exports = testRoutes;