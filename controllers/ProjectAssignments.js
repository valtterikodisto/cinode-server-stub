'use strict';

var utils = require('../utils/writer.js');
var ProjectAssignments = require('../service/ProjectAssignmentsService');

module.exports.searchRoles = function searchRoles (req, res, next, body, companyId) {
  ProjectAssignments.searchRoles(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
