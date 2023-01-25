'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateFileAttachment = require('../service/CompanyCandidateFileAttachmentService');

module.exports.getCandidateAttachment = function getCandidateAttachment (req, res, next, id, companyId, attachmentId) {
  CompanyCandidateFileAttachment.getCandidateAttachment(id, companyId, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
