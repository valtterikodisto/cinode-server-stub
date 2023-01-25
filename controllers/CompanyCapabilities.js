'use strict';

var utils = require('../utils/writer.js');
var CompanyCapabilities = require('../service/CompanyCapabilitiesService');

module.exports.companyCapabilities = function companyCapabilities (req, res, next, companyId) {
  CompanyCapabilities.companyCapabilities(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
