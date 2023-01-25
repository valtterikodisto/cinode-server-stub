'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidates = require('../service/CompanyCandidatesService');

module.exports.candidates = function candidates (req, res, next, companyId) {
  CompanyCandidates.candidates(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
