'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorEventTask = require('../service/CompanyUserSubcontractorEventTaskService');

module.exports.companyUserSubcontractorEventTask = function companyUserSubcontractorEventTask (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventTask.companyUserSubcontractorEventTask(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserSubcontractorEventTask = function deleteCompanyUserSubcontractorEventTask (req, res, next, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventTask.deleteCompanyUserSubcontractorEventTask(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserSubcontractorEventTask = function newCompanyUserSubcontractorEventTask (req, res, next, body, companyId, companyUserId) {
  CompanyUserSubcontractorEventTask.newCompanyUserSubcontractorEventTask(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserSubcontractorEventTask = function updateCompanyUserSubcontractorEventTask (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserSubcontractorEventTask.updateCompanyUserSubcontractorEventTask(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
