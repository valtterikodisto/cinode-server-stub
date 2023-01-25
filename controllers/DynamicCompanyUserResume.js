'use strict';

var utils = require('../utils/writer.js');
var DynamicCompanyUserResume = require('../service/DynamicCompanyUserResumeService');

module.exports.dynamicResume = function dynamicResume (req, res, next, companyId, companyUserId, id) {
  DynamicCompanyUserResume.dynamicResume(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
