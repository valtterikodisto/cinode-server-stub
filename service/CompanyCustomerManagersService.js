'use strict';


/**
 * Add customer responsible
 * Sample request:        POST /v0.1/companies/1/customers/22228/managers      {          [             51096          ]               }
 *
 * body CustomerId_managers_body CompanyCustomerManagersAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns List
 **/
exports.addCompanyCustomerResponsible = function(body,companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get customer managers
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns List
 **/
exports.companyCustomerManagers = function(companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove customer responsible
 * Sample request:                    DELETE /v0.1/companies/1/customers/22228/managers/54632
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer User Id
 * no response value expected for this operation
 **/
exports.removeCustomerManager = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

