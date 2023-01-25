'use strict';

var utils = require('../utils/writer.js');
var ProjectReferences = require('../service/ProjectReferencesService');

module.exports.projectReferences = function projectReferences (req, res, next, companyId, projectId) {
  ProjectReferences.projectReferences(companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
