'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventTasks = require('../service/CompanyCandidateEventTasksService');

module.exports.companyCandidateTaskEventList = function companyCandidateTaskEventList (req, res, next, companyId, candidateId) {
  CompanyCandidateEventTasks.companyCandidateTaskEventList(companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
