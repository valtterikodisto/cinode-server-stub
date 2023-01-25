'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventsNotes = require('../service/CompanyUserEmployeeEventsNotesService');

module.exports.companyUserEmployeeEventNoteList = function companyUserEmployeeEventNoteList (req, res, next, companyId, companyUserId) {
  CompanyUserEmployeeEventsNotes.companyUserEmployeeEventNoteList(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
