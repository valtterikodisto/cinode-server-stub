'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventsMeetings = require('../service/CompanyUserSubcontractorEventsMeetingsService');

module.exports.companyUserSubcontractorEventMeetingList = function companyUserSubcontractorEventMeetingList (req, res, next, companyId, companyUserId) {
  CompanyUserSubcontractorEventsMeetings.companyUserSubcontractorEventMeetingList(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
