'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEvent = require('../service/CompanyCustomerEventService');

module.exports.companyCustomerEvent = function companyCustomerEvent (req, res, next, companyId, customerId, id) {
  CompanyCustomerEvent.companyCustomerEvent(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
