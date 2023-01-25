'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventNote = require('../service/CompanyCandidateEventNoteService');

module.exports.companyCandidateEventNote = function companyCandidateEventNote (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventNote.companyCandidateEventNote(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCandidateEventNote = function deleteCompanyCandidateEventNote (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEventNote.deleteCompanyCandidateEventNote(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCandidateEventNote = function newCompanyCandidateEventNote (req, res, next, body, companyId, candidateId) {
  CompanyCandidateEventNote.newCompanyCandidateEventNote(body, companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyCandidateEventNote = function updateCompanyCandidateEventNote (req, res, next, body, companyId, candidateId, id) {
  CompanyCandidateEventNote.updateCompanyCandidateEventNote(body, companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
