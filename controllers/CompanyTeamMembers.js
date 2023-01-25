'use strict';

var utils = require('../utils/writer.js');
var CompanyTeamMembers = require('../service/CompanyTeamMembersService');

module.exports.addTeamMember = function addTeamMember (req, res, next, body, companyId, teamId) {
  CompanyTeamMembers.addTeamMember(body, companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamMember = function getTeamMember (req, res, next, companyId, teamId, id) {
  CompanyTeamMembers.getTeamMember(companyId, teamId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamMembers = function getTeamMembers (req, res, next, companyId, teamId) {
  CompanyTeamMembers.getTeamMembers(companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTeamMember = function removeTeamMember (req, res, next, companyId, teamId, id) {
  CompanyTeamMembers.removeTeamMember(companyId, teamId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTeamMember = function updateTeamMember (req, res, next, body, companyId, teamId, id) {
  CompanyTeamMembers.updateTeamMember(body, companyId, teamId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
