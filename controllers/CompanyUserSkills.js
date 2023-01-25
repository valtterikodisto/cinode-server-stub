'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSkills = require('../service/CompanyUserSkillsService');

module.exports.skills = function skills (req, res, next, companyId, companyUserId) {
  CompanyUserSkills.skills(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
