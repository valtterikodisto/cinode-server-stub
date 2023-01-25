'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractor = require('../service/CompanyUserSubcontractorService');

module.exports.addCompanyUserSubcontractor = function addCompanyUserSubcontractor (req, res, next, body, companyId) {
  CompanyUserSubcontractor.addCompanyUserSubcontractor(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companySubcontractor = function companySubcontractor (req, res, next, companyId, id) {
  CompanyUserSubcontractor.companySubcontractor(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanySubcontractor = function deleteCompanySubcontractor (req, res, next, companyId, id, firstName, lastName) {
  CompanyUserSubcontractor.deleteCompanySubcontractor(companyId, id, firstName, lastName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
