'use strict';


/**
 * Get company user resumes list
 * Requires module: CompanyUserResume. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns List
 **/
exports.companyUserResumes = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "template" : "",
  "companyId" : 1,
  "companyUserId" : 6,
  "description" : "description",
  "isPublic" : true,
  "language" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 0,
  "title" : "title",
  "slug" : "slug"
}, {
  "template" : "",
  "companyId" : 1,
  "companyUserId" : 6,
  "description" : "description",
  "isPublic" : true,
  "language" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 0,
  "title" : "title",
  "slug" : "slug"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

