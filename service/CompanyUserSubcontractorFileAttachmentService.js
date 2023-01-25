'use strict';


/**
 * Get subcontractor File Attachment by Id
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * id Integer 
 * companyId Integer 
 * attachmentId UUID 
 * returns byte[]
 **/
exports.getSubcontractorAttachment = function(id,companyId,attachmentId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

