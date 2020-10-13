const express = require('express');
const testRoutes = require('./TestRoutes');
const apiRouter = express.Router();

apiRouter.use('/api', testRoutes);

module.exports = apiRouter;  