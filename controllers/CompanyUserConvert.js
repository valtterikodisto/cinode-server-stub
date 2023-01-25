'use strict';

var utils = require('../utils/writer.js');
var CompanyUserConvert = require('../service/CompanyUserConvertService');

module.exports.convertUserToAadAccount = function convertUserToAadAccount (req, res, next, body, companyUserId, companyId) {
  CompanyUserConvert.convertUserToAadAccount(body, companyUserId, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
