var express = require('express');
var route = express();

//import controller
const controller = require('./controller');
//create route
route.get("/index",controller.index);
route.get("/list",controller.list);
route.get("/create",controller.create);

//export route 
module.exports= route;

