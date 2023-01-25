'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomers = require('../service/CompanyCustomersService');

module.exports.companyCustomers = function companyCustomers (req, res, next, companyId) {
  CompanyCustomers.companyCustomers(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
