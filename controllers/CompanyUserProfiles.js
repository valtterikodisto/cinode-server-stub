'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfiles = require('../service/CompanyUserProfilesService');

module.exports.companyUserProfiles = function companyUserProfiles (req, res, next, companyId, companyUserId) {
  CompanyUserProfiles.companyUserProfiles(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
