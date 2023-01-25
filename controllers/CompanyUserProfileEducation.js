'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileEducation = require('../service/CompanyUserProfileEducationService');

module.exports.companyUserProfileEducation = function companyUserProfileEducation (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileEducation.companyUserProfileEducation(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileEducation = function deleteCompanyUserProfileEducation (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileEducation.deleteCompanyUserProfileEducation(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileEducation = function newCompanyUserProfileEducation (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileEducation.newCompanyUserProfileEducation(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileEducation = function updateCompanyUserProfileEducation (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileEducation.updateCompanyUserProfileEducation(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
