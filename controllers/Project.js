'use strict';

var utils = require('../utils/writer.js');
var Project = require('../service/ProjectService');

module.exports.deleteCompanyProject = function deleteCompanyProject (req, res, next, companyId, id) {
  Project.deleteCompanyProject(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyProject = function newCompanyProject (req, res, next, body, companyId) {
  Project.newCompanyProject(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.project = function project (req, res, next, companyId, id) {
  Project.project(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyProject = function updateCompanyProject (req, res, next, body, id, companyId) {
  Project.updateCompanyProject(body, id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
