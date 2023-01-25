'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsMeetings = require('../service/CompanyCustomerEventsMeetingsService');

module.exports.companyCustomerEventMeetings = function companyCustomerEventMeetings (req, res, next, companyId, customerId) {
  CompanyCustomerEventsMeetings.companyCustomerEventMeetings(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
