'use strict';

var utils = require('../utils/writer.js');
var CompanyTeamUsers = require('../service/CompanyTeamUsersService');

module.exports.addTeamUser = function addTeamUser (req, res, next, body, companyId, teamId) {
  CompanyTeamUsers.addTeamUser(body, companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getTeamUsers = function getTeamUsers (req, res, next, companyId, teamId) {
  CompanyTeamUsers.getTeamUsers(companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTeamUser = function removeTeamUser (req, res, next, companyId, teamId, id) {
  CompanyTeamUsers.removeTeamUser(companyId, teamId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
