'use strict';


/**
 * Get customer contact by id
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Contact Id
 * returns CompanyCustomerContactModel
 **/
exports.contact = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete customer contact
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Contact Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCustomerContact = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update customer contact
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Contacts_id_body CompanyCustomerContactAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Contact Id
 * returns CompanyCustomerContactModel
 **/
exports.editCompanyCustomerContact = function(body,companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add customer contact
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body CustomerId_contacts_body CompanyCustomerContactAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns CompanyCustomerContactModel
 **/
exports.newCompanyCustomerContact = function(body,companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

