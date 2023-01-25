'use strict';


/**
 * Get Roles for CompanyUser by id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserProjectAssignmentModel
 **/
exports.companyUserRoles = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "prospect" : [ null, null ],
  "assigned" : [ {
    "companyId" : 0,
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "customerId" : 6,
    "project" : "",
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
    "id" : 5,
    "title" : "title",
    "projectId" : 1,
    "startDate" : "2000-01-23T04:56:07.000+00:00",
    "customer" : ""
  }, {
    "companyId" : 0,
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "customerId" : 6,
    "project" : "",
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
    "id" : 5,
    "title" : "title",
    "projectId" : 1,
    "startDate" : "2000-01-23T04:56:07.000+00:00",
    "customer" : ""
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

