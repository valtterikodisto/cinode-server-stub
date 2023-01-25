'use strict';

var utils = require('../utils/writer.js');
var SkillSearch = require('../service/SkillSearchService');

module.exports.searchSkill = function searchSkill (req, res, next, body, companyId) {
  SkillSearch.searchSkill(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
