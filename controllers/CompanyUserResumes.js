'use strict';

var utils = require('../utils/writer.js');
var CompanyUserResumes = require('../service/CompanyUserResumesService');

module.exports.companyUserResumes = function companyUserResumes (req, res, next, companyId, companyUserId) {
  CompanyUserResumes.companyUserResumes(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
