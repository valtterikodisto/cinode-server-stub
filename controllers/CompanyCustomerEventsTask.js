'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsTask = require('../service/CompanyCustomerEventsTaskService');

module.exports.companyCustomerEventTask = function companyCustomerEventTask (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsTask.companyCustomerEventTask(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteTask = function deleteTask (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsTask.deleteTask(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newTask = function newTask (req, res, next, body, companyId, customerId) {
  CompanyCustomerEventsTask.newTask(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateTask = function updateTask (req, res, next, body, companyId, customerId, id) {
  CompanyCustomerEventsTask.updateTask(body, companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
