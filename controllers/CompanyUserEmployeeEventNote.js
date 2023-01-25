'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventNote = require('../service/CompanyUserEmployeeEventNoteService');

module.exports.companyUserEmployeeEventNote = function companyUserEmployeeEventNote (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventNote.companyUserEmployeeEventNote(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserEmployeeEventNote = function deleteCompanyUserEmployeeEventNote (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventNote.deleteCompanyUserEmployeeEventNote(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserEmployeeEventNote = function newCompanyUserEmployeeEventNote (req, res, next, body, companyId, companyUserId) {
  CompanyUserEmployeeEventNote.newCompanyUserEmployeeEventNote(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserEmployeeEventNote = function updateCompanyUserEmployeeEventNote (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserEmployeeEventNote.updateCompanyUserEmployeeEventNote(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
