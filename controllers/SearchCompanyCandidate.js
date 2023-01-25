'use strict';

var utils = require('../utils/writer.js');
var SearchCompanyCandidate = require('../service/SearchCompanyCandidateService');

module.exports.searchCompanyCandidate = function searchCompanyCandidate (req, res, next, body, companyId) {
  SearchCompanyCandidate.searchCompanyCandidate(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
