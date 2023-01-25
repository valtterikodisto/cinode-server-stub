'use strict';


/**
 * Get company customer contacts list from search criteria
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Contacts_search_body SearchCompanyCustomerQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchCompanyCustomerContactResultModel
 **/
exports.searchCompanyCustomerContact = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "lastName" : "lastName",
    "comments" : "comments",
    "phone2" : "phone2",
    "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
    "title" : "title",
    "phone1" : "phone1",
    "tags" : [ {
      "companyId" : 0,
      "tagType" : "",
      "name" : "name",
      "id" : 6,
      "seoId" : "seoId"
    }, {
      "companyId" : 0,
      "tagType" : "",
      "name" : "name",
      "id" : 6,
      "seoId" : "seoId"
    } ],
    "firstName" : "firstName",
    "companyId" : 5,
    "customerId" : 5,
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
    "slug" : "slug",
    "email" : "email"
  }, {
    "lastName" : "lastName",
    "comments" : "comments",
    "phone2" : "phone2",
    "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
    "title" : "title",
    "phone1" : "phone1",
    "tags" : [ {
      "companyId" : 0,
      "tagType" : "",
      "name" : "name",
      "id" : 6,
      "seoId" : "seoId"
    }, {
      "companyId" : 0,
      "tagType" : "",
      "name" : "name",
      "id" : 6,
      "seoId" : "seoId"
    } ],
    "firstName" : "firstName",
    "companyId" : 5,
    "customerId" : 5,
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
    "slug" : "slug",
    "email" : "email"
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

