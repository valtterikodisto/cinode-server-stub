'use strict';


/**
 * Get company customer by id
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer 
 * id Integer 
 * returns CompanyCustomerModel
 **/
exports.customer = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : [ {
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
  }, {
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
  } ],
  "projects" : [ {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  }, {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  } ],
  "attachments" : [ {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
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
  "companyId" : 1,
  "identification" : "identification",
  "phone" : "phone",
  "name" : "name",
  "intermediator" : true,
  "links" : [ null, null ],
  "id" : 7,
  "fax" : "fax",
  "seoId" : "seoId",
  "contacts" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  } ],
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
  "homepage" : "homepage",
  "vatNumber" : "vatNumber",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete customer
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Customers_id_body_4 CompanyCustomerDeleteModel (optional)
 * id Integer Customer Id
 * companyId Integer Company Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCustomer = function(body,id,companyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add company customer
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body CompanyId_customers_body CompanyCustomerAddEditModel (optional)
 * companyId Integer Company Id
 * returns CompanyCustomerModel
 **/
exports.newCompanyCustomer = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : [ {
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
  }, {
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
  } ],
  "projects" : [ {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  }, {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  } ],
  "attachments" : [ {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
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
  "companyId" : 1,
  "identification" : "identification",
  "phone" : "phone",
  "name" : "name",
  "intermediator" : true,
  "links" : [ null, null ],
  "id" : 7,
  "fax" : "fax",
  "seoId" : "seoId",
  "contacts" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  } ],
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
  "homepage" : "homepage",
  "vatNumber" : "vatNumber",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update company customer
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Customers_id_body CompanyCustomerAddEditModel (optional)
 * id Integer 
 * companyId Integer 
 * returns CompanyCustomerModel
 **/
exports.updateCompanyCustomer = function(body,id,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : [ {
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
  }, {
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
  } ],
  "projects" : [ {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  }, {
    "identifier" : "identifier",
    "companyId" : 7,
    "customerId" : 9,
    "description" : "description",
    "links" : [ null, null ],
    "id" : 3,
    "customerIdentifier" : "customerIdentifier",
    "title" : "title"
  } ],
  "attachments" : [ {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "companyId" : 4,
    "attachmentType" : "",
    "customerId" : 2,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
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
  "companyId" : 1,
  "identification" : "identification",
  "phone" : "phone",
  "name" : "name",
  "intermediator" : true,
  "links" : [ null, null ],
  "id" : 7,
  "fax" : "fax",
  "seoId" : "seoId",
  "contacts" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  } ],
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
  "homepage" : "homepage",
  "vatNumber" : "vatNumber",
  "status" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

