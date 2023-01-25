'use strict';

var utils = require('../utils/writer.js');
var CompanyTag = require('../service/CompanyTagService');

module.exports.companyTag = function companyTag (req, res, next, companyId, id) {
  CompanyTag.companyTag(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
