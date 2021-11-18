const sql = require("./db.js");

const Vehicle = function(vehicle) {
  this.id = vehicle.id
  this.timestamp = vehicle.timestamp;
  this.license_plate = vehicle.license_plate;
  this.action = vehicle.action;
  this.time = vehicle.time;
};

Vehicle.getAll = (result) => {
  let query = "SELECT * FROM vehicles ORDER BY timestamp DESC";

  sql.query(query, (err, res) => {
    if (err) {
      console.log("error: ", err);
      result(null, err);
      return;
    }

    console.log("vehicles: ", res);
    result(null, res);
  });
};

module.exports = Vehicle;