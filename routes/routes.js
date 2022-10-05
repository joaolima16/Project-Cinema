const express = require("express")
const TicketController = require("../controllers/TicketController/index")
const Controllers = require("../controllers/Controller")
const route = express.Router();


route.get("/migration",Controllers.migrations)
route.post("/insertMovie/:id",TicketController.CreateTicket)
module.exports = route;