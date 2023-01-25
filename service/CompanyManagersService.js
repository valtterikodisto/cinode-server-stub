'use strict';


/**
 * Get company managers
 * Sample request:        GET /v0.1/companies/1/managers
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyManagers = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "companyId" : 6,
  "companyUserId" : 0,
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
  "companyUserType" : ""
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "companyId" : 6,
  "companyUserId" : 0,
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
  "companyUserType" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

