'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileTraining = require('../service/CompanyUserProfileTrainingService');

module.exports.companyUserProfileTraining = function companyUserProfileTraining (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileTraining.companyUserProfileTraining(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileTraining = function deleteCompanyUserProfileTraining (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileTraining.deleteCompanyUserProfileTraining(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileTraining = function newCompanyUserProfileTraining (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileTraining.newCompanyUserProfileTraining(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileTraining = function updateCompanyUserProfileTraining (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileTraining.updateCompanyUserProfileTraining(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
