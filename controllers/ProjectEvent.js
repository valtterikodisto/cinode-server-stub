'use strict';

var utils = require('../utils/writer.js');
var ProjectEvent = require('../service/ProjectEventService');

module.exports.projectEvent = function projectEvent (req, res, next, companyId, projectId, id) {
  ProjectEvent.projectEvent(companyId, projectId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
