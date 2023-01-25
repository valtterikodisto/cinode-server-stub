'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileLanguage = require('../service/CompanyUserProfileLanguageService');

module.exports.companyUserProfileLanguage = function companyUserProfileLanguage (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileLanguage.companyUserProfileLanguage(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileLanguage = function deleteCompanyUserProfileLanguage (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileLanguage.deleteCompanyUserProfileLanguage(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileLanguage = function newCompanyUserProfileLanguage (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileLanguage.newCompanyUserProfileLanguage(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileLanguage = function updateCompanyUserProfileLanguage (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileLanguage.updateCompanyUserProfileLanguage(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
