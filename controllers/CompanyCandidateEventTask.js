'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventTask = require('../service/CompanyCandidateEventTaskService');

module.exports.companyCandidateEventTask = function companyCandidateEventTask (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventTask.companyCandidateEventTask(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCandidateEventTask = function deleteCompanyCandidateEventTask (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventTask.deleteCompanyCandidateEventTask(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCandidateEventTask = function newCompanyCandidateEventTask (req, res, next, body, companyId, candidateId) {
  CompanyCandidateEventTask.newCompanyCandidateEventTask(body, companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyCandidateEventTask = function updateCompanyCandidateEventTask (req, res, next, body, companyId, candidateId, id) {
  CompanyCandidateEventTask.updateCompanyCandidateEventTask(body, companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
