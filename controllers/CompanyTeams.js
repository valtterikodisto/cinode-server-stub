'use strict';

var utils = require('../utils/writer.js');
var CompanyTeams = require('../service/CompanyTeamsService');

module.exports.companyTeams = function companyTeams (req, res, next, companyId) {
  CompanyTeams.companyTeams(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
