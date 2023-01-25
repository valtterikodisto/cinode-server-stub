'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsNotes = require('../service/CompanyCustomerEventsNotesService');

module.exports.companyCustomerEventNotes = function companyCustomerEventNotes (req, res, next, companyId, customerId) {
  CompanyCustomerEventsNotes.companyCustomerEventNotes(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
