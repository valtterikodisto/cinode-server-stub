'use strict';

var utils = require('../utils/writer.js');
var CompanyUserRoles = require('../service/CompanyUserRolesService');

module.exports.companyUserRoles = function companyUserRoles (req, res, next, companyId, id) {
  CompanyUserRoles.companyUserRoles(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
