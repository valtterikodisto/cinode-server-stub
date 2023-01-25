'use strict';

var utils = require('../utils/writer.js');
var CompanyTeamManagers = require('../service/CompanyTeamManagersService');

module.exports.addTeamManager = function addTeamManager (req, res, next, body, companyId, teamId) {
  CompanyTeamManagers.addTeamManager(body, companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeTeamManager = function removeTeamManager (req, res, next, companyId, teamId, id) {
  CompanyTeamManagers.removeTeamManager(companyId, teamId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.teamManagers = function teamManagers (req, res, next, companyId, teamId) {
  CompanyTeamManagers.teamManagers(companyId, teamId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
