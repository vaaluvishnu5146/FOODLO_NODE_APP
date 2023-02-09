const express = require("express");
const server = express();
const dotenv = require("dotenv");
const app = require("./app");

dotenv.config();
// PORT NUMBER TO LISTEN
const port = 5000;

// STARTING THE SERVER
server.use("/", app);
require("./dbConfig");
server.listen(port);
