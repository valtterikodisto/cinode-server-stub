'use strict';

var utils = require('../utils/writer.js');
var CompanyProjectFileAttachment = require('../service/CompanyProjectFileAttachmentService');

module.exports.getProjectAttachment = function getProjectAttachment (req, res, next, id, companyId, attachmentId) {
  CompanyProjectFileAttachment.getProjectAttachment(id, companyId, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
