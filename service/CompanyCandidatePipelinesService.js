'use strict';


/**
 * Get candidate pipelines
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.candidatePipelines = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "stages" : [ {
    "probability" : 5,
    "description" : "description",
    "id" : 6,
    "title" : "title",
    "order" : 1
  }, {
    "probability" : 5,
    "description" : "description",
    "id" : 6,
    "title" : "title",
    "order" : 1
  } ],
  "description" : "description",
  "id" : 0,
  "title" : "title"
}, {
  "stages" : [ {
    "probability" : 5,
    "description" : "description",
    "id" : 6,
    "title" : "title",
    "order" : 1
  }, {
    "probability" : 5,
    "description" : "description",
    "id" : 6,
    "title" : "title",
    "order" : 1
  } ],
  "description" : "description",
  "id" : 0,
  "title" : "title"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

