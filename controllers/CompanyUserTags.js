'use strict';

var utils = require('../utils/writer.js');
var CompanyUserTags = require('../service/CompanyUserTagsService');

module.exports.editCompanyUserTags = function editCompanyUserTags (req, res, next, body, companyId, companyUserId) {
  CompanyUserTags.editCompanyUserTags(body, companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
