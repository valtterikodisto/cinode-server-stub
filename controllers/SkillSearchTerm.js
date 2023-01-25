'use strict';

var utils = require('../utils/writer.js');
var SkillSearchTerm = require('../service/SkillSearchTermService');

module.exports.searchSkillTerm = function searchSkillTerm (req, res, next, body, companyId) {
  SkillSearchTerm.searchSkillTerm(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
