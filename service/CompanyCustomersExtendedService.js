'use strict';


/**
 * Get extended company customers list
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.customersExtended = function(companyId) {
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
  "email" : "email",
  "managers" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyCustomerManagerId" : 7,
    "companyUserId" : 1,
    "customerId" : 1,
    "links" : [ null, null ],
    "id" : 1,
    "seoId" : "seoId",
    "customer" : "",
    "companyUserType" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyCustomerManagerId" : 7,
    "companyUserId" : 1,
    "customerId" : 1,
    "links" : [ null, null ],
    "id" : 1,
    "seoId" : "seoId",
    "customer" : "",
    "companyUserType" : ""
  } ],
  "tags" : [ {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  }, {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  } ],
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
  "email" : "email",
  "managers" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyCustomerManagerId" : 7,
    "companyUserId" : 1,
    "customerId" : 1,
    "links" : [ null, null ],
    "id" : 1,
    "seoId" : "seoId",
    "customer" : "",
    "companyUserType" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyCustomerManagerId" : 7,
    "companyUserId" : 1,
    "customerId" : 1,
    "links" : [ null, null ],
    "id" : 1,
    "seoId" : "seoId",
    "customer" : "",
    "companyUserType" : ""
  } ],
  "tags" : [ {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  }, {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  } ],
  "status" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

