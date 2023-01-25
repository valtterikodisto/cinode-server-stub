'use strict';


/**
 * Get absence types for company
 *
 * companyId Integer 
 * returns List
 **/
exports.absenceTypes = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "name" : "name",
  "id" : 0
}, {
  "name" : "name",
  "id" : 0
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

