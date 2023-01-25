'use strict';

var utils = require('../utils/writer.js');
var CompanyTags = require('../service/CompanyTagsService');

module.exports.companyTags = function companyTags (req, res, next, companyId) {
  CompanyTags.companyTags(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
