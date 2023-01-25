'use strict';

var utils = require('../utils/writer.js');
var CompanyTeam = require('../service/CompanyTeamService');

module.exports.newTeam = function newTeam (req, res, next, body, companyId) {
  CompanyTeam.newTeam(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.team = function team (req, res, next, companyId, id) {
  CompanyTeam.team(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTeam = function updateTeam (req, res, next, body, id, companyId) {
  CompanyTeam.updateTeam(body, id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
