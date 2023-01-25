'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsTasks = require('../service/ProjectEventsTasksService');

module.exports.projectEventTasks = function projectEventTasks (req, res, next, companyId, projectId) {
  ProjectEventsTasks.projectEventTasks(companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
