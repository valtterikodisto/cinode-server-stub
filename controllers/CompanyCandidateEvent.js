'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateEvent = require('../service/CompanyCandidateEventService');

module.exports.companyCandidateEvent = function companyCandidateEvent (req, res, next, companyId, candidateId, id) {
  CompanyCandidateEvent.companyCandidateEvent(companyId, candidateId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
