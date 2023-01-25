'use strict';


/**
 * Upload Candidate File Attachment
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * id Integer Candidate Id
 * companyId Integer Company Id
 * returns CompanyCandidateFileAttachmentListModel
 **/
exports.candidateAttachment = function(id,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 6,
  "attachments" : [ {
    "fileName" : "fileName",
    "extension" : "extension",
    "companyId" : 1,
    "attachmentType" : "",
    "companyCandidateId" : 5,
    "description" : "description",
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "fileName" : "fileName",
    "extension" : "extension",
    "companyId" : 1,
    "attachmentType" : "",
    "companyCandidateId" : 5,
    "description" : "description",
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "companyCandidateId" : 0,
  "links" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

