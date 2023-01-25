'use strict';

var utils = require('../utils/writer.js');
var ProjectReference = require('../service/ProjectReferenceService');

module.exports.projectReference = function projectReference (req, res, next, companyId, projectId, id) {
  ProjectReference.projectReference(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
