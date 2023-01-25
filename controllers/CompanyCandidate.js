'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidate = require('../service/CompanyCandidateService');

module.exports.addCompanyCandidate = function addCompanyCandidate (req, res, next, body, companyId) {
  CompanyCandidate.addCompanyCandidate(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.candidate = function candidate (req, res, next, companyId, id) {
  CompanyCandidate.candidate(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteCompanyCandidate = function deleteCompanyCandidate (req, res, next, companyId, id) {
  CompanyCandidate.deleteCompanyCandidate(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.patchCompanyCandidate = function patchCompanyCandidate (req, res, next, body, companyId, id) {
  CompanyCandidate.patchCompanyCandidate(body, companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
