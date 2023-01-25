'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEventMeetings = require('../service/CompanyCandidateEventMeetingsService');

module.exports.companyCandidateMeetingEventList = function companyCandidateMeetingEventList (req, res, next, companyId, candidateId) {
  CompanyCandidateEventMeetings.companyCandidateMeetingEventList(companyId, candidateId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
