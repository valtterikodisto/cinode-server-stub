'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEvents = require('../service/CompanyCandidateEventsService');

module.exports.companyCandidateEvents = function companyCandidateEvents (req, res, next, companyId, candidateId) {
  CompanyCandidateEvents.companyCandidateEvents(companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
