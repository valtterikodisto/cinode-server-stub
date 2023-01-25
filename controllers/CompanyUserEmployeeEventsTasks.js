'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventsTasks = require('../service/CompanyUserEmployeeEventsTasksService');

module.exports.companyUserEmployeeEventTaskList = function companyUserEmployeeEventTaskList (req, res, next, companyId, companyUserId) {
  CompanyUserEmployeeEventsTasks.companyUserEmployeeEventTaskList(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
