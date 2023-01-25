'use strict';


/**
 * Get extended company users list
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyUsersExtended = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
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
  "id" : 1,
  "seoId" : "seoId",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
}, {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
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
  "id" : 1,
  "seoId" : "seoId",
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

