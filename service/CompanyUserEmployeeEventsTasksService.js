'use strict';


/**
 * Get employee tasks events list
 * Requires access level: CompanyManager. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns List
 **/
exports.companyUserEmployeeEventTaskList = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 6,
  "companyUserId" : 0,
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
  "type" : "",
  "title" : "title",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "companyId" : 6,
  "companyUserId" : 0,
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
  "type" : "",
  "title" : "title",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

