'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerTags = require('../service/CompanyCustomerTagsService');

module.exports.editCustomerTags = function editCustomerTags (req, res, next, body, companyId, customerId) {
  CompanyCustomerTags.editCustomerTags(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
