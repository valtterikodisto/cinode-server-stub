'use strict';


/**
 * Get company customers list from search criteria
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Customers_search_body SearchCompanyCustomerQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchCompanyCustomerResultModel
 **/
exports.searchCompanyCustomer = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
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
  } ],
  "hits" : 0,
  "totalItems" : 6,
  "pagedAndSortedBy" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

