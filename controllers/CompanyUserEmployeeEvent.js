'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEvent = require('../service/CompanyUserEmployeeEventService');

module.exports.companyUserEmployeeEvent = function companyUserEmployeeEvent (req, res, next, companyId, companyUserId, id) {
  CompanyUserEmployeeEvent.companyUserEmployeeEvent(companyId, companyUserId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
