'use strict';


/**
 * Get Candidate File Attachment by Id
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * id Integer 
 * companyId Integer 
 * attachmentId UUID 
 * returns byte[]
 **/
exports.getCandidateAttachment = function(id,companyId,attachmentId) {
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

