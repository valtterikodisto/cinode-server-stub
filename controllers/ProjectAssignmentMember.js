'use strict';

var utils = require('../utils/writer.js');
var ProjectAssignmentMember = require('../service/ProjectAssignmentMemberService');

module.exports.addProjectAssignmentMemberEmployee = function addProjectAssignmentMemberEmployee (req, res, next, body, companyId, projectId, roleId) {
  ProjectAssignmentMember.addProjectAssignmentMemberEmployee(body, companyId, projectId, roleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.addProjectAssignmentMemberSubcontractor = function addProjectAssignmentMemberSubcontractor (req, res, next, body, companyId, projectId, roleId) {
  ProjectAssignmentMember.addProjectAssignmentMemberSubcontractor(body, companyId, projectId, roleId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteProjectAssignmentMemberEmployee = function deleteProjectAssignmentMemberEmployee (req, res, next, companyId, projectId, roleId, id) {
  ProjectAssignmentMember.deleteProjectAssignmentMemberEmployee(companyId, projectId, roleId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectAssignmentMemberEmployee = function updateProjectAssignmentMemberEmployee (req, res, next, body, companyId, projectId, roleId, id) {
  ProjectAssignmentMember.updateProjectAssignmentMemberEmployee(body, companyId, projectId, roleId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateProjectAssignmentMemberSubcontractor = function updateProjectAssignmentMemberSubcontractor (req, res, next, body, companyId, projectId, roleId, id) {
  ProjectAssignmentMember.updateProjectAssignmentMemberSubcontractor(body, companyId, projectId, roleId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
