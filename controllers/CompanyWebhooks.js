'use strict';

var utils = require('../utils/writer.js');
var CompanyWebhooks = require('../service/CompanyWebhooksService');

module.exports.companyWebhooks = function companyWebhooks (req, res, next, companyId) {
  CompanyWebhooks.companyWebhooks(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
