'use strict';


/**
 * Get Candidates
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.candidates = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "companyId" : 6,
  "firstname" : "firstname",
  "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "seoId" : "seoId",
  "lastname" : "lastname",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00"
}, {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "companyId" : 6,
  "firstname" : "firstname",
  "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "seoId" : "seoId",
  "lastname" : "lastname",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

