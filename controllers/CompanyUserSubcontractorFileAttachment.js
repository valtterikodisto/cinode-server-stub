'use strict';

var utils = require('../utils/writer.js');
var CompanyUserSubcontractorFileAttachment = require('../service/CompanyUserSubcontractorFileAttachmentService');

module.exports.getSubcontractorAttachment = function getSubcontractorAttachment (req, res, next, id, companyId, attachmentId) {
  CompanyUserSubcontractorFileAttachment.getSubcontractorAttachment(id, companyId, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
