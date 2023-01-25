'use strict';

var utils = require('../utils/writer.js');
var CompanyUsers = require('../service/CompanyUsersService');

module.exports.companyUsers = function companyUsers (req, res, next, companyId) {
  CompanyUsers.companyUsers(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
