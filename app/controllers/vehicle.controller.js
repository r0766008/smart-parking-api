const Tutorial = require("../models/vehicle.model.js");

exports.findAll = (req, res) => {
  Tutorial.getAll((err, data) => {
    if (err)
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving tutorials."
      });
    else res.send(data);
  });
};