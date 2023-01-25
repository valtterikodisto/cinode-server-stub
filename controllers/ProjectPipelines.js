'use strict';

var utils = require('../utils/writer.js');
var ProjectPipelines = require('../service/ProjectPipelinesService');

module.exports.projectPipelines = function projectPipelines (req, res, next, companyId) {
  ProjectPipelines.projectPipelines(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
