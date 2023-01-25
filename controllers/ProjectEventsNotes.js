'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsNotes = require('../service/ProjectEventsNotesService');

module.exports.projectEventNotes = function projectEventNotes (req, res, next, companyId, projectId) {
  ProjectEventsNotes.projectEventNotes(companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
