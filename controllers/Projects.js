'use strict';

var utils = require('../utils/writer.js');
var Projects = require('../service/ProjectsService');

module.exports.projects = function projects (req, res, next, companyId) {
  Projects.projects(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
