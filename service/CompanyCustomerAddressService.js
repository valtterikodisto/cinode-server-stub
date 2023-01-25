'use strict';


/**
 * Get customer address by id
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Address Id
 * returns CompanyCustomerAddressModel
 **/
exports.customerAddress = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : "zipCode",
  "country" : "country",
  "companyId" : 5,
  "comments" : "comments",
  "city" : "city",
  "addressType" : "",
  "street1" : "street1",
  "links" : [ null, null ],
  "id" : 2,
  "street2" : "street2",
  "companyCustomerId" : 5,
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
 * Delete customer address
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Address Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCustomerAddress = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update customer address
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Addresses_id_body CompanyCustomerAddressAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id Integer Customer Address Id
 * returns CompanyCustomerAddressModel
 **/
exports.editCompanyCustomerAddress = function(body,companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : "zipCode",
  "country" : "country",
  "companyId" : 5,
  "comments" : "comments",
  "city" : "city",
  "addressType" : "",
  "street1" : "street1",
  "links" : [ null, null ],
  "id" : 2,
  "street2" : "street2",
  "companyCustomerId" : 5,
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
 * Add customer address
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body CustomerId_addresses_body CompanyCustomerAddressAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns CompanyCustomerAddressModel
 **/
exports.newCompanyCustomerAddress = function(body,companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "zipCode" : "zipCode",
  "country" : "country",
  "companyId" : 5,
  "comments" : "comments",
  "city" : "city",
  "addressType" : "",
  "street1" : "street1",
  "links" : [ null, null ],
  "id" : 2,
  "street2" : "street2",
  "companyCustomerId" : 5,
  "email" : "email"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

