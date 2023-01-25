'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileWorkExperience = require('../service/CompanyUserProfileWorkExperienceService');

module.exports.companyUserProfileWorkExperience = function companyUserProfileWorkExperience (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileWorkExperience.companyUserProfileWorkExperience(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileWorkExperience = function deleteCompanyUserProfileWorkExperience (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileWorkExperience.deleteCompanyUserProfileWorkExperience(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileWorkExperience = function newCompanyUserProfileWorkExperience (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileWorkExperience.newCompanyUserProfileWorkExperience(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileWorkExperience = function updateCompanyUserProfileWorkExperience (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileWorkExperience.updateCompanyUserProfileWorkExperience(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
