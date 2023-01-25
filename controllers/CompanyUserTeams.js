'use strict';

var utils = require('../utils/writer.js');
var CompanyUserTeams = require('../service/CompanyUserTeamsService');

module.exports.userTeams = function userTeams (req, res, next, companyId, companyUserId) {
  CompanyUserTeams.userTeams(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
