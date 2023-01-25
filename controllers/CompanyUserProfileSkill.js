'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileSkill = require('../service/CompanyUserProfileSkillService');

module.exports.companyUserProfileSkill = function companyUserProfileSkill (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileSkill.companyUserProfileSkill(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileSkill = function deleteCompanyUserProfileSkill (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileSkill.deleteCompanyUserProfileSkill(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileSkill = function newCompanyUserProfileSkill (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileSkill.newCompanyUserProfileSkill(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileSkill = function updateCompanyUserProfileSkill (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileSkill.updateCompanyUserProfileSkill(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
