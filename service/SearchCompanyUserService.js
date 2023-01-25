'use strict';


/**
 * Get company users list from search criteria
 *
 * body Users_search_body SearchCompanyUserQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchCompanyUserResultModel
 **/
exports.searchCompanyUser = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyUserId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : 1,
    "seoId" : "seoId",
    "companyUserType" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyUserId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : 1,
    "seoId" : "seoId",
    "companyUserType" : ""
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

