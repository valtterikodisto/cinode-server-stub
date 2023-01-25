'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventTask = require('../service/CompanyUserEmployeeEventTaskService');

module.exports.companyUserEmployeeEventTask = function companyUserEmployeeEventTask (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventTask.companyUserEmployeeEventTask(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyUserEmployeeEventTask = function deleteCompanyUserEmployeeEventTask (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEventTask.deleteCompanyUserEmployeeEventTask(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserEmployeeEventTask = function newCompanyUserEmployeeEventTask (req, res, next, body, companyId, companyUserId) {
  CompanyUserEmployeeEventTask.newCompanyUserEmployeeEventTask(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserEmployeeEventTask = function updateCompanyUserEmployeeEventTask (req, res, next, body, companyId, companyUserId, id) {
  CompanyUserEmployeeEventTask.updateCompanyUserEmployeeEventTask(body, companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
