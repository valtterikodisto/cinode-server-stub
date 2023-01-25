'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomersExtended = require('../service/CompanyCustomersExtendedService');

module.exports.customersExtended = function customersExtended (req, res, next, companyId) {
  CompanyCustomersExtended.customersExtended(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
