'use strict';

var utils = require('../utils/writer.js');
var CompanyUser = require('../service/CompanyUserService');

module.exports.addCompanyUser = function addCompanyUser (req, res, next, body, companyId) {
  CompanyUser.addCompanyUser(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUser = function deleteCompanyUser (req, res, next, companyId, id, firstName, lastName) {
  CompanyUser.deleteCompanyUser(companyId, id, firstName, lastName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchCompanyUser = function patchCompanyUser (req, res, next, body, companyId, id) {
  CompanyUser.patchCompanyUser(body, companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUser = function updateCompanyUser (req, res, next, body, companyId, id) {
  CompanyUser.updateCompanyUser(body, companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.user = function user (req, res, next, companyId, id) {
  CompanyUser.user(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
