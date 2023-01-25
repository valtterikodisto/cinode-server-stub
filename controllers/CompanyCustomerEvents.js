'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEvents = require('../service/CompanyCustomerEventsService');

module.exports.companyCustomerEvents = function companyCustomerEvents (req, res, next, companyId, customerId) {
  CompanyCustomerEvents.companyCustomerEvents(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
