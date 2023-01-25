'use strict';


/**
 * Get subcontractors list
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyUserSubcontractors = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 6,
  "companyName" : "companyName",
  "rating" : 0,
  "linkedIn" : "linkedIn",
  "blog" : "blog",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 1,
  "companyIdentifier" : "companyIdentifier",
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 5,
  "seoId" : "seoId",
  "email" : "email",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
}, {
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 6,
  "companyName" : "companyName",
  "rating" : 0,
  "linkedIn" : "linkedIn",
  "blog" : "blog",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 1,
  "companyIdentifier" : "companyIdentifier",
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 5,
  "seoId" : "seoId",
  "email" : "email",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

