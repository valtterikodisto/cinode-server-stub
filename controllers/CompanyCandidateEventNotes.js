'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventNotes = require('../service/CompanyCandidateEventNotesService');

module.exports.companyCandidateNoteEventList = function companyCandidateNoteEventList (req, res, next, companyId, candidateId) {
  CompanyCandidateEventNotes.companyCandidateNoteEventList(companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
