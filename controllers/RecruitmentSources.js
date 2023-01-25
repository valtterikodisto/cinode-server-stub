'use strict';

var utils = require('../utils/writer.js');
var RecruitmentSources = require('../service/RecruitmentSourcesService');

module.exports.recruitmentSources = function recruitmentSources (req, res, next, companyId) {
  RecruitmentSources.recruitmentSources(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
