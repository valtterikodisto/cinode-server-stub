'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractors = require('../service/CompanyUserSubcontractorsService');

module.exports.companyUserSubcontractors = function companyUserSubcontractors (req, res, next, companyId) {
  CompanyUserSubcontractors.companyUserSubcontractors(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
