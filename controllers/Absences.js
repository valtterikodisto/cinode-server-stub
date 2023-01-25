'use strict';

var utils = require('../utils/writer.js');
var Absences = require('../service/AbsencesService');

module.exports.absences = function absences (req, res, next, companyId, companyUserId) {
  Absences.absences(companyId, companyUserId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
