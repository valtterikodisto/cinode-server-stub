'use strict';

var utils = require('../utils/writer.js');
var ProjectEvents = require('../service/ProjectEventsService');

module.exports.projectEvents = function projectEvents (req, res, next, companyId, projectId) {
  ProjectEvents.projectEvents(companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
