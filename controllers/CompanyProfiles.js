'use strict';

var utils = require('../utils/writer.js');
var CompanyProfiles = require('../service/CompanyProfilesService');

module.exports.companyProfiles = function companyProfiles (req, res, next, body, companyId) {
  CompanyProfiles.companyProfiles(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
