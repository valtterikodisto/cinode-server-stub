'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsMeeting = require('../service/CompanyCustomerEventsMeetingService');

module.exports.companyCustomerEventMeeting = function companyCustomerEventMeeting (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsMeeting.companyCustomerEventMeeting(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteMeeting = function deleteMeeting (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsMeeting.deleteMeeting(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newMeeting = function newMeeting (req, res, next, body, companyId, customerId) {
  CompanyCustomerEventsMeeting.newMeeting(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateMeeting = function updateMeeting (req, res, next, body, companyId, customerId, id) {
  CompanyCustomerEventsMeeting.updateMeeting(body, companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
