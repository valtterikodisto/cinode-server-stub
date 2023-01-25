'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfilePresentation = require('../service/CompanyUserProfilePresentationService');

module.exports.companyUserProfilePresentation = function companyUserProfilePresentation (req, res, next, companyId, companyUserId) {
  CompanyUserProfilePresentation.companyUserProfilePresentation(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateCompanyUserProfilePresentation = function updateCompanyUserProfilePresentation (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfilePresentation.updateCompanyUserProfilePresentation(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
