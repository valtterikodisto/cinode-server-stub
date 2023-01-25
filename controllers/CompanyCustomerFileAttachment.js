'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerFileAttachment = require('../service/CompanyCustomerFileAttachmentService');

module.exports.getCustomerAttachment = function getCustomerAttachment (req, res, next, id, companyId, attachmentId) {
  CompanyCustomerFileAttachment.getCustomerAttachment(id, companyId, attachmentId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
