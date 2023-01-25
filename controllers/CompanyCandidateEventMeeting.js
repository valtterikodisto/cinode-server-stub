'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventMeeting = require('../service/CompanyCandidateEventMeetingService');

module.exports.companyCandidateEventMeeting = function companyCandidateEventMeeting (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventMeeting.companyCandidateEventMeeting(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCandidateEventMeeting = function deleteCompanyCandidateEventMeeting (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventMeeting.deleteCompanyCandidateEventMeeting(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCandidateEventMeeting = function newCompanyCandidateEventMeeting (req, res, next, body, companyId, candidateId) {
  CompanyCandidateEventMeeting.newCompanyCandidateEventMeeting(body, companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyCandidateEventMeeting = function updateCompanyCandidateEventMeeting (req, res, next, body, companyId, candidateId, id) {
  CompanyCandidateEventMeeting.updateCompanyCandidateEventMeeting(body, companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
