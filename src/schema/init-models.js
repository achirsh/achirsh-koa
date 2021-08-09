var DataTypes = require("sequelize").DataTypes;
var _resource = require("./resource");
var _user = require("./user");

function initModels(sequelize) {
  var resource = _resource(sequelize, DataTypes);
  var user = _user(sequelize, DataTypes);


  return {
    resource,
    user,
  };
}
module.exports = initModels;
module.exports.initModels = initModels;
module.exports.default = initModels;
