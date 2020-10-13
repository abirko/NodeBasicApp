import express from "express";
import bodyParser from "body-parser";
const app = express();
var routes = require('../src/routes');

app.use(bodyParser.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const db = require("../src/models");
db.sequelize.sync({ force: false, alter : true }).then(() => {
    console.log("Drop and re-sync db.");
});

export default app;