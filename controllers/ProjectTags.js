'use strict';

var utils = require('../utils/writer.js');
var ProjectTags = require('../service/ProjectTagsService');

module.exports.editProjectTags = function editProjectTags (req, res, next, body, companyId, projectId) {
  ProjectTags.editProjectTags(body, companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
