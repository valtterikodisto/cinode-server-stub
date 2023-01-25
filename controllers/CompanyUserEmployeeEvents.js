'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEvents = require('../service/CompanyUserEmployeeEventsService');

module.exports.companyUserEmployeeEvents = function companyUserEmployeeEvents (req, res, next, companyId, companyUserId) {
  CompanyUserEmployeeEvents.companyUserEmployeeEvents(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
