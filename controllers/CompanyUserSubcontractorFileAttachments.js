'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorFileAttachments = require('../service/CompanyUserSubcontractorFileAttachmentsService');

module.exports.subcontractorAttachment = function subcontractorAttachment (req, res, next, id, companyId) {
  CompanyUserSubcontractorFileAttachments.subcontractorAttachment(id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
