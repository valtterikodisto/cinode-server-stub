'use strict';

var utils = require('../utils/writer.js');
var ProjectAssignmentSkills = require('../service/ProjectAssignmentSkillsService');

module.exports.addProjectAssignmentSkill = function addProjectAssignmentSkill (req, res, next, body, companyId, projectId, roleId) {
  ProjectAssignmentSkills.addProjectAssignmentSkill(body, companyId, projectId, roleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProjectAssignmentSkill = function deleteProjectAssignmentSkill (req, res, next, companyId, projectId, roleId, id) {
  ProjectAssignmentSkills.deleteProjectAssignmentSkill(companyId, projectId, roleId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectAssignmentSkill = function updateProjectAssignmentSkill (req, res, next, body, companyId, projectId, roleId, id) {
  ProjectAssignmentSkills.updateProjectAssignmentSkill(body, companyId, projectId, roleId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
