'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileReference = require('../service/CompanyUserProfileReferenceService');

module.exports.companyUserProfileReference = function companyUserProfileReference (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileReference.companyUserProfileReference(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileReference = function deleteCompanyUserProfileReference (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileReference.deleteCompanyUserProfileReference(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileReference = function newCompanyUserProfileReference (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileReference.newCompanyUserProfileReference(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileReference = function updateCompanyUserProfileReference (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileReference.updateCompanyUserProfileReference(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
