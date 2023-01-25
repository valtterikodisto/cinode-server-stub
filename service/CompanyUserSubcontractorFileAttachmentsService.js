'use strict';


/**
 * Upload subcontractor file attachment
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * id Integer Candidate Id
 * companyId Integer Company Id
 * returns CompanyUserSubcontractorFileAttachmentListModel
 **/
exports.subcontractorAttachment = function(id,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 6,
  "attachments" : [ {
    "fileName" : "fileName",
    "extension" : "extension",
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 1,
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
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 1,
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
  "companyUserId" : 0,
  "links" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

