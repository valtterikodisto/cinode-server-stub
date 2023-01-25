'use strict';

var utils = require('../utils/writer.js');
var CompanyAddressUsers = require('../service/CompanyAddressUsersService');

module.exports.companyAddressUsers = function companyAddressUsers (req, res, next, companyId, id) {
  CompanyAddressUsers.companyAddressUsers(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
