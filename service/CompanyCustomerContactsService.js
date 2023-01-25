'use strict';


/**
 * Get customer contact list
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns List
 **/
exports.contacts = function(companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

