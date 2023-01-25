'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventMeeting = require('../service/CompanyUserEmployeeEventMeetingService');

module.exports.companyUserEmployeeEventMeeting = function companyUserEmployeeEventMeeting (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventMeeting.companyUserEmployeeEventMeeting(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserEmployeeEventMeeting = function deleteCompanyUserEmployeeEventMeeting (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventMeeting.deleteCompanyUserEmployeeEventMeeting(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserEmployeeEventMeeting = function newCompanyUserEmployeeEventMeeting (req, res, next, body, companyId, companyUserId) {
  CompanyUserEmployeeEventMeeting.newCompanyUserEmployeeEventMeeting(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserEmployeeEventMeeting = function updateCompanyUserEmployeeEventMeeting (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserEmployeeEventMeeting.updateCompanyUserEmployeeEventMeeting(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
