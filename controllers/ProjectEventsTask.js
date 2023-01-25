'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsTask = require('../service/ProjectEventsTaskService');

module.exports.deleteProjectTask = function deleteProjectTask (req, res, next, companyId, projectId, id) {
  ProjectEventsTask.deleteProjectTask(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newProjectTask = function newProjectTask (req, res, next, body, companyId, projectId) {
  ProjectEventsTask.newProjectTask(body, companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectEventTask = function projectEventTask (req, res, next, companyId, projectId, id) {
  ProjectEventsTask.projectEventTask(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectTask = function updateProjectTask (req, res, next, body, companyId, projectId, id) {
  ProjectEventsTask.updateProjectTask(body, companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
