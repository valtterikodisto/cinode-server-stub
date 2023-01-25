'use strict';

var utils = require('../utils/writer.js');
var SearchCompanyCustomerContact = require('../service/SearchCompanyCustomerContactService');

module.exports.searchCompanyCustomerContact = function searchCompanyCustomerContact (req, res, next, body, companyId) {
  SearchCompanyCustomerContact.searchCompanyCustomerContact(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
