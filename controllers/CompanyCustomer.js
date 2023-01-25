'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomer = require('../service/CompanyCustomerService');

module.exports.customer = function customer (req, res, next, companyId, id) {
  CompanyCustomer.customer(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCustomer = function deleteCompanyCustomer (req, res, next, body, id, companyId) {
  CompanyCustomer.deleteCompanyCustomer(body, id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCustomer = function newCompanyCustomer (req, res, next, body, companyId) {
  CompanyCustomer.newCompanyCustomer(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyCustomer = function updateCompanyCustomer (req, res, next, body, id, companyId) {
  CompanyCustomer.updateCompanyCustomer(body, id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
