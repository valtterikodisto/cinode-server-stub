'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerManagers = require('../service/CompanyCustomerManagersService');

module.exports.addCompanyCustomerResponsible = function addCompanyCustomerResponsible (req, res, next, body, companyId, customerId) {
  CompanyCustomerManagers.addCompanyCustomerResponsible(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyCustomerManagers = function companyCustomerManagers (req, res, next, companyId, customerId) {
  CompanyCustomerManagers.companyCustomerManagers(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeCustomerManager = function removeCustomerManager (req, res, next, companyId, customerId, id) {
  CompanyCustomerManagers.removeCustomerManager(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
