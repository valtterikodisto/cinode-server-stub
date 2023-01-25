'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidatePipelines = require('../service/CompanyCandidatePipelinesService');

module.exports.candidatePipelines = function candidatePipelines (req, res, next, companyId) {
  CompanyCandidatePipelines.candidatePipelines(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
