'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsMeeting = require('../service/ProjectEventsMeetingService');

module.exports.deleteProjectMeeting = function deleteProjectMeeting (req, res, next, companyId, projectId, id) {
  ProjectEventsMeeting.deleteProjectMeeting(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newProjectMeeting = function newProjectMeeting (req, res, next, body, companyId, projectId) {
  ProjectEventsMeeting.newProjectMeeting(body, companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.projectEventMeeting = function projectEventMeeting (req, res, next, companyId, projectId, id) {
  ProjectEventsMeeting.projectEventMeeting(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectMeeting = function updateProjectMeeting (req, res, next, body, companyId, projectId, id) {
  ProjectEventsMeeting.updateProjectMeeting(body, companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
