'use strict';

var utils = require('../utils/writer.js');
var CompanyUserFull = require('../service/CompanyUserFullService');

module.exports.userFull = function userFull (req, res, next, companyId, id) {
  CompanyUserFull.userFull(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
