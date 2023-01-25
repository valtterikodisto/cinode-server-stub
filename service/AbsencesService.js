'use strict';


/**
 * Get absence period by company user id
 *
 * companyId Integer Your Cinode Company id
 * companyUserId Integer The id of the actual User
 * returns List
 **/
exports.absences = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "companyUserId" : 1,
  "companySeoId" : "companySeoId",
  "companyUserSeoId" : "companyUserSeoId",
  "absenceType" : "",
  "extentPercentage" : 6,
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
  "startDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "companyId" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "companyUserId" : 1,
  "companySeoId" : "companySeoId",
  "companyUserSeoId" : "companyUserSeoId",
  "absenceType" : "",
  "extentPercentage" : 6,
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
  "startDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

