'use strict';

var utils = require('../utils/writer.js');
var Company = require('../service/CompanyService');

module.exports.company = function company (req, res, next, companyId) {
  Company.company(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
