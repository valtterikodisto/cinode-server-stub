'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventMeeting = require('../service/CompanyUserSubcontractorEventMeetingService');

module.exports.companyUserSubcontractorEventMeeting = function companyUserSubcontractorEventMeeting (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventMeeting.companyUserSubcontractorEventMeeting(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserSubcontractorEventMeeting = function deleteCompanyUserSubcontractorEventMeeting (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventMeeting.deleteCompanyUserSubcontractorEventMeeting(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserSubcontractorEventMeeting = function newCompanyUserSubcontractorEventMeeting (req, res, next, body, companyId, companyUserId) {
  CompanyUserSubcontractorEventMeeting.newCompanyUserSubcontractorEventMeeting(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserSubcontractorEventMeeting = function updateCompanyUserSubcontractorEventMeeting (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventMeeting.updateCompanyUserSubcontractorEventMeeting(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
