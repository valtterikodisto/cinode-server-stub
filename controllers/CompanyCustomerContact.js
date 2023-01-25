'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerContact = require('../service/CompanyCustomerContactService');

module.exports.contact = function contact (req, res, next, companyId, customerId, id) {
  CompanyCustomerContact.contact(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCustomerContact = function deleteCompanyCustomerContact (req, res, next, companyId, customerId, id) {
  CompanyCustomerContact.deleteCompanyCustomerContact(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.editCompanyCustomerContact = function editCompanyCustomerContact (req, res, next, body, companyId, customerId, id) {
  CompanyCustomerContact.editCompanyCustomerContact(body, companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCustomerContact = function newCompanyCustomerContact (req, res, next, body, companyId, customerId) {
  CompanyCustomerContact.newCompanyCustomerContact(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
