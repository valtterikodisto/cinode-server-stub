'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventsNotes = require('../service/CompanyUserSubcontractorEventsNotesService');

module.exports.companyUserSubcontractorEventsNotes = function companyUserSubcontractorEventsNotes (req, res, next, companyId, companyUserId) {
  CompanyUserSubcontractorEventsNotes.companyUserSubcontractorEventsNotes(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
