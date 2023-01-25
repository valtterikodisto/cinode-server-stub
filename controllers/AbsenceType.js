'use strict';

var utils = require('../utils/writer.js');
var AbsenceType = require('../service/AbsenceTypeService');

module.exports.absenceTypes = function absenceTypes (req, res, next, companyId) {
  AbsenceType.absenceTypes(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
