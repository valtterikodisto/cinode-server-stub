'use strict';

var utils = require('../utils/writer.js');
var CompanyResumes = require('../service/CompanyResumesService');

module.exports.companyResumes = function companyResumes (req, res, next, companyId) {
  CompanyResumes.companyResumes(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
