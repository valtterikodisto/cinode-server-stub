'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEvent = require('../service/CompanyUserSubcontractorEventService');

module.exports.companyUserSubcontractorEvent = function companyUserSubcontractorEvent (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEvent.companyUserSubcontractorEvent(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
