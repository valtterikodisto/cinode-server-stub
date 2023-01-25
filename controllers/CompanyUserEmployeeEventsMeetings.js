'use strict';

var utils = require('../utils/writer.js');
var CompanyUserEmployeeEventsMeetings = require('../service/CompanyUserEmployeeEventsMeetingsService');

module.exports.companyUserEmployeeEventMeetingList = function companyUserEmployeeEventMeetingList (req, res, next, companyId, companyUserId) {
  CompanyUserEmployeeEventsMeetings.companyUserEmployeeEventMeetingList(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
