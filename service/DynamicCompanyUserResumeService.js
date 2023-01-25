'use strict';


/**
 * Get resume by id
 * Requires module: CompanyUserResume. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer Resume Id
 * returns DynamicCompanyUserResumeModel
 **/
exports.dynamicResume = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "resume" : "",
  "template" : "",
  "imageId" : 0,
  "created" : "",
  "companyUserId" : 2,
  "description" : "description",
  "language" : "",
  "title" : "title",
  "parentProfileId" : 6,
  "companyId" : 7,
  "isPublic" : true,
  "profileTranslationId" : 1,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "parentCompanyUserResumeId" : 5,
  "id" : 5,
  "updated" : "",
  "slug" : "slug"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

