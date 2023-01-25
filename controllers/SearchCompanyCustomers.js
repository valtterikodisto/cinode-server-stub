'use strict';

var utils = require('../utils/writer.js');
var SearchCompanyCustomers = require('../service/SearchCompanyCustomersService');

module.exports.searchCompanyCustomer = function searchCompanyCustomer (req, res, next, body, companyId) {
  SearchCompanyCustomers.searchCompanyCustomer(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
