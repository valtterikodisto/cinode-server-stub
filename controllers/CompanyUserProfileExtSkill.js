'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileExtSkill = require('../service/CompanyUserProfileExtSkillService');

module.exports.companyUserProfileExtSkill = function companyUserProfileExtSkill (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileExtSkill.companyUserProfileExtSkill(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileExtSkill = function deleteCompanyUserProfileExtSkill (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileExtSkill.deleteCompanyUserProfileExtSkill(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileExtSkill = function newCompanyUserProfileExtSkill (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileExtSkill.newCompanyUserProfileExtSkill(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileExtSkill = function updateCompanyUserProfileExtSkill (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileExtSkill.updateCompanyUserProfileExtSkill(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
