'use strict';


/**
 * Get projects list  - please note this endpoint currently only returns projects with the status WON. Please use the SearchProjects endpoint for more options of filtering desired Projects
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.projects = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "identifier" : "identifier",
  "companyId" : 7,
  "customerId" : 9,
  "description" : "description",
  "links" : [ null, null ],
  "id" : 3,
  "customerIdentifier" : "customerIdentifier",
  "title" : "title"
}, {
  "identifier" : "identifier",
  "companyId" : 7,
  "customerId" : 9,
  "description" : "description",
  "links" : [ null, null ],
  "id" : 3,
  "customerIdentifier" : "customerIdentifier",
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

