'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventNote = require('../service/CompanyUserSubcontractorEventNoteService');

module.exports.companyUserSubcontractorEventNote = function companyUserSubcontractorEventNote (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventNote.companyUserSubcontractorEventNote(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserSubcontractorEventNote = function deleteCompanyUserSubcontractorEventNote (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventNote.deleteCompanyUserSubcontractorEventNote(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserSubcontractorEventNote = function newCompanyUserSubcontractorEventNote (req, res, next, body, companyId, companyUserId) {
  CompanyUserSubcontractorEventNote.newCompanyUserSubcontractorEventNote(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserSubcontractorEventNote = function updateCompanyUserSubcontractorEventNote (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventNote.updateCompanyUserSubcontractorEventNote(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
