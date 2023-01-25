'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfile = require('../service/CompanyUserProfileService');

module.exports.companyUserProfile = function companyUserProfile (req, res, next, companyId, companyUserId) {
  CompanyUserProfile.companyUserProfile(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newCompanyUserProfile = function newCompanyUserProfile (req, res, next, body, companyId, companyUserId) {
  CompanyUserProfile.newCompanyUserProfile(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
