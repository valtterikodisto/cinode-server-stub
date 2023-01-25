'use strict';

var utils = require('../utils/writer.js');
var CompanyCurrencies = require('../service/CompanyCurrenciesService');

module.exports.companyCurrencies = function companyCurrencies (req, res, next, companyId) {
  CompanyCurrencies.companyCurrencies(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
