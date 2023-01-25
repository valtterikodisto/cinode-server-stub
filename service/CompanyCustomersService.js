'use strict';


/**
 * Get company customers list
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyCustomers = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 6,
  "identification" : "identification",
  "name" : "name",
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
  "id" : 0,
  "seoId" : "seoId",
  "status" : ""
}, {
  "companyId" : 6,
  "identification" : "identification",
  "name" : "name",
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
  "id" : 0,
  "seoId" : "seoId",
  "status" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

