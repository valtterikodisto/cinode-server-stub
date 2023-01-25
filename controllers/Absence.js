'use strict';

var utils = require('../utils/writer.js');
var Absence = require('../service/AbsenceService');

module.exports.absence = function absence (req, res, next, companyId, companyUserId, id) {
  Absence.absence(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAbsence = function deleteAbsence (req, res, next, companyId, companyUserId, id) {
  Absence.deleteAbsence(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newAbsence = function newAbsence (req, res, next, body, companyId, companyUserId) {
  Absence.newAbsence(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateAbsence = function updateAbsence (req, res, next, body, companyId, companyUserId, id) {
  Absence.updateAbsence(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
