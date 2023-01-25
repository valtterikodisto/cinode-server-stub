'use strict';


/**
 * Get project reference by id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * returns List
 **/
exports.projectReferences = function(companyId,projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 4,
  "language" : "language",
  "links" : [ null, null ],
  "id" : 2,
  "text" : "text",
  "title" : "title",
  "projectId" : 7
}, {
  "companyId" : 4,
  "language" : "language",
  "links" : [ null, null ],
  "id" : 2,
  "text" : "text",
  "title" : "title",
  "projectId" : 7
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

