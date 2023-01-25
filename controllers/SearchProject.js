'use strict';

var utils = require('../utils/writer.js');
var SearchProject = require('../service/SearchProjectService');

module.exports.searchProject = function searchProject (req, res, next, body, companyId) {
  SearchProject.searchProject(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
