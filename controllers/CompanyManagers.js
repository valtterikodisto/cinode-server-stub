'use strict';

var utils = require('../utils/writer.js');
var CompanyManagers = require('../service/CompanyManagersService');

module.exports.companyManagers = function companyManagers (req, res, next, companyId) {
  CompanyManagers.companyManagers(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
