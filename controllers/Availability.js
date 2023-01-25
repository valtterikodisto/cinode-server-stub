'use strict';

var utils = require('../utils/writer.js');
var Availability = require('../service/AvailabilityService');

module.exports.searchAvailability = function searchAvailability (req, res, next, body, companyId) {
  Availability.searchAvailability(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
