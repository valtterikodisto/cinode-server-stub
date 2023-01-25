'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerAddress = require('../service/CompanyCustomerAddressService');

module.exports.customerAddress = function customerAddress (req, res, next, companyId, customerId, id) {
  CompanyCustomerAddress.customerAddress(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCustomerAddress = function deleteCompanyCustomerAddress (req, res, next, companyId, customerId, id) {
  CompanyCustomerAddress.deleteCompanyCustomerAddress(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCompanyCustomerAddress = function editCompanyCustomerAddress (req, res, next, body, companyId, customerId, id) {
  CompanyCustomerAddress.editCompanyCustomerAddress(body, companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCustomerAddress = function newCompanyCustomerAddress (req, res, next, body, companyId, customerId) {
  CompanyCustomerAddress.newCompanyCustomerAddress(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
