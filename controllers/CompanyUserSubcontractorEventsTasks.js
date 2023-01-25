'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventsTasks = require('../service/CompanyUserSubcontractorEventsTasksService');

module.exports.companyUserSubcontractorEventsTasks = function companyUserSubcontractorEventsTasks (req, res, next, companyId, companyUserId) {
  CompanyUserSubcontractorEventsTasks.companyUserSubcontractorEventsTasks(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
