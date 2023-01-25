'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsNote = require('../service/ProjectEventsNoteService');

module.exports.deleteProjectNote = function deleteProjectNote (req, res, next, companyId, projectId, id) {
  ProjectEventsNote.deleteProjectNote(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newProjectNote = function newProjectNote (req, res, next, body, companyId, projectId) {
  ProjectEventsNote.newProjectNote(body, companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectEventNote = function projectEventNote (req, res, next, companyId, projectId, id) {
  ProjectEventsNote.projectEventNote(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectNote = function updateProjectNote (req, res, next, body, companyId, projectId, id) {
  ProjectEventsNote.updateProjectNote(body, companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
