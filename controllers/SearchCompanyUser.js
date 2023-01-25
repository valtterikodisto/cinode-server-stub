'use strict';

var utils = require('../utils/writer.js');
var SearchCompanyUser = require('../service/SearchCompanyUserService');

module.exports.searchCompanyUser = function searchCompanyUser (req, res, next, body, companyId) {
  SearchCompanyUser.searchCompanyUser(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
