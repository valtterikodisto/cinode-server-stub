'use strict';


/**
 * Get company tag by Id
 * Sample request:                    GET /v0.1/companies/1/tags/1
 *
 * companyId Integer Company Id
 * id Integer Tag Id
 * returns CompanyTagModel
 **/
exports.companyTag = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 0,
  "tagType" : "",
  "name" : "name",
  "id" : 6,
  "seoId" : "seoId"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

