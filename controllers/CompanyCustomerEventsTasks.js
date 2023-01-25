'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsTasks = require('../service/CompanyCustomerEventsTasksService');

module.exports.companyCustomerEventTasks = function companyCustomerEventTasks (req, res, next, companyId, customerId) {
  CompanyCustomerEventsTasks.companyCustomerEventTasks(companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
