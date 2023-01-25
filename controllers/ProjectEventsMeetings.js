'use strict';

var utils = require('../utils/writer.js');
var ProjectEventsMeetings = require('../service/ProjectEventsMeetingsService');

module.exports.projectEventMeetings = function projectEventMeetings (req, res, next, companyId, projectId) {
  ProjectEventsMeetings.projectEventMeetings(companyId, projectId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
