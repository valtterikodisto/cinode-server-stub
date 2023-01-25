'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileEmployer = require('../service/CompanyUserProfileEmployerService');

module.exports.companyUserProfileEmployer = function companyUserProfileEmployer (req, res, next, companyId, companyUserId, id) {
  CompanyUserProfileEmployer.companyUserProfileEmployer(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserProfileEmployer = function deleteCompanyUserProfileEmployer (req, res, next, id, companyId, companyUserId) {
  CompanyUserProfileEmployer.deleteCompanyUserProfileEmployer(id, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfileEmployer = function newCompanyUserProfileEmployer (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfileEmployer.newCompanyUserProfileEmployer(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfileEmployer = function updateCompanyUserProfileEmployer (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserProfileEmployer.updateCompanyUserProfileEmployer(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
