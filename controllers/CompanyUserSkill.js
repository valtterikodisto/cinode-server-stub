'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSkill = require('../service/CompanyUserSkillService');

module.exports.skill = function skill (req, res, next, companyId, companyUserId, id) {
  CompanyUserSkill.skill(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
