'use strict';

var utils = require('../utils/writer.js');
var CompanySubcontractorGroup = require('../service/CompanySubcontractorGroupService');

module.exports.companySubcontractorGroup = function companySubcontractorGroup (req, res, next, companyId, id) {
  CompanySubcontractorGroup.companySubcontractorGroup(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
