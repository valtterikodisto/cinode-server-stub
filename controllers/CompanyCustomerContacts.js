'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerContacts = require('../service/CompanyCustomerContactsService');

module.exports.contacts = function contacts (req, res, next, companyId, customerId) {
  CompanyCustomerContacts.contacts(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
