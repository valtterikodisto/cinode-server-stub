'use strict';

var utils = require('../utils/writer.js');
var CompanyWebhook = require('../service/CompanyWebhookService');

module.exports.installWebhookManifest = function installWebhookManifest (req, res, next, body, companyId) {
  CompanyWebhook.installWebhookManifest(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newWebhook = function newWebhook (req, res, next, body, companyId) {
  CompanyWebhook.newWebhook(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.removeWebhook = function removeWebhook (req, res, next, companyId, id) {
  CompanyWebhook.removeWebhook(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
