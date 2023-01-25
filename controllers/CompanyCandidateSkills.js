'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateSkills = require('../service/CompanyCandidateSkillsService');

module.exports.deleteCompanyCandidateSkill = function deleteCompanyCandidateSkill (req, res, next, companyId, candidateId, id) {
  CompanyCandidateSkills.deleteCompanyCandidateSkill(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyCandidateSkill = function newCompanyCandidateSkill (req, res, next, body, companyId, candidateId) {
  CompanyCandidateSkills.newCompanyCandidateSkill(body, companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
