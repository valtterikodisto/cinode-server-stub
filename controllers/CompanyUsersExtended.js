'use strict';

var utils = require('../utils/writer.js');
var CompanyUsersExtended = require('../service/CompanyUsersExtendedService');

module.exports.companyUsersExtended = function companyUsersExtended (req, res, next, companyId) {
  CompanyUsersExtended.companyUsersExtended(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
