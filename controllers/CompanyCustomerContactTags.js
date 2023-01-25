'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerContactTags = require('../service/CompanyCustomerContactTagsService');

module.exports.editCustomerContactTags = function editCustomerContactTags (req, res, next, body, companyId, customerId, contactId) {
  CompanyCustomerContactTags.editCustomerContactTags(body, companyId, customerId, contactId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
