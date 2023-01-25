'use strict';

var utils = require('../utils/writer.js');
var CompanyCandidateFileAttachments = require('../service/CompanyCandidateFileAttachmentsService');

module.exports.candidateAttachment = function candidateAttachment (req, res, next, id, companyId) {
  CompanyCandidateFileAttachments.candidateAttachment(id, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
