var orm = require("../config/orm.js");

var burger = {
  selectAll: function (cb) {
    orm.selectAll("burger", function (res) {
      cb(res);
    });
  },

  insertOne: function (cols, vals, cb) {
    orm.insertOne("burger", cols, vals, function (res) {
      cb(res);
    });
  },

  delete: function(condition, cb) {
    orm.delete("burger", condition, function(res) {
      cb(res);
    });
  }, 

  updateOne: function (objColVals, burgerID, cb) {
    orm.updateOne("burger", objColVals, burgerID, function (res) {
      cb(res);
    });
  },
};

module.exports = burger;
