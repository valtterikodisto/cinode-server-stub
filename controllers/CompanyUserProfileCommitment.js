'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileCommitment = require('../service/CompanyUserProfileCommitmentService');

module.exports.companyUserProfileCommitment = function companyUserProfileCommitment (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileCommitment.companyUserProfileCommitment(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileCommitment = function deleteCompanyUserProfileCommitment (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileCommitment.deleteCompanyUserProfileCommitment(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileCommitment = function newCompanyUserProfileCommitment (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileCommitment.newCompanyUserProfileCommitment(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileCommitment = function updateCompanyUserProfileCommitment (req, res, next, body, id, companyId, companyUserId) {
  CompanyUserProfileCommitment.updateCompanyUserProfileCommitment(body, id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
