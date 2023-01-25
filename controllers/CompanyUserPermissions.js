'use strict';

var utils = require('../utils/writer.js');
var CompanyUserPermissions = require('../service/CompanyUserPermissionsService');

module.exports.updatePermissions = function updatePermissions (req, res, next, body, companyId, companyUserId) {
  CompanyUserPermissions.updatePermissions(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
