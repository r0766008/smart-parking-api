module.exports = app => {
  const tutorials = require("../controllers/vehicle.controller.js");

  var router = require("express").Router();

  // Retrieve all Tutorials
  router.get("/", tutorials.findAll);

  app.use('/api/vehicles', router);
};