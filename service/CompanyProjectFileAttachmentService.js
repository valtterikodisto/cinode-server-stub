'use strict';


/**
 * Get Project file attachment by Id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * id Integer 
 * companyId Integer 
 * attachmentId UUID 
 * returns byte[]
 **/
exports.getProjectAttachment = function(id,companyId,attachmentId) {
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

