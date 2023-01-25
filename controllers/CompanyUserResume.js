'use strict';

var utils = require('../utils/writer.js');
var CompanyUserResume = require('../service/CompanyUserResumeService');

module.exports.resume = function resume (req, res, next, companyId, companyUserId, id) {
  CompanyUserResume.resume(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
