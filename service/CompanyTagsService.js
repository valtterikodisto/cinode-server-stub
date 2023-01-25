'use strict';


/**
 * Get company tags
 * Sample request:        GET /v0.1/companies/1/tags
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyTags = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 5,
  "name" : "name",
  "id" : 5,
  "seoId" : "seoId"
}, {
  "companyId" : 5,
  "name" : "name",
  "id" : 5,
  "seoId" : "seoId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

