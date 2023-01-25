'use strict';

var utils = require('../utils/writer.js');
var ProjectAssignment = require('../service/ProjectAssignmentService');

module.exports.deleteProjectAssignment = function deleteProjectAssignment (req, res, next, companyId, projectId, id) {
  ProjectAssignment.deleteProjectAssignment(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newProjectAssignment = function newProjectAssignment (req, res, next, body, companyId, projectId) {
  ProjectAssignment.newProjectAssignment(body, companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.oldProjectAssignment = function oldProjectAssignment (req, res, next, companyId, projectId, id) {
  ProjectAssignment.oldProjectAssignment(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectAssignment = function projectAssignment (req, res, next, companyId, projectId, id) {
  ProjectAssignment.projectAssignment(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectAssignment = function updateProjectAssignment (req, res, next, body, companyId, projectId, id) {
  ProjectAssignment.updateProjectAssignment(body, companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
