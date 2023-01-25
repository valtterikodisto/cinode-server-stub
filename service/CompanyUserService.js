'use strict';


/**
 * Add company user employee
 * Requires access level: CompanyAdmin. 
 *
 * body CompanyId_users_body CompanyUserAddModel (optional)
 * companyId Integer Company Id
 * returns CompanyUserFullModel
 **/
exports.addCompanyUser = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 2,
  "teamManagers" : [ {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  }, {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  } ],
  "companyUserEmail" : "companyUserEmail",
  "lastName" : "lastName",
  "mobility" : 7,
  "gitHub" : "gitHub",
  "roles" : [ {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  }, {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  } ],
  "baseSalary" : 6,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "teamMembers" : [ {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  }, {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  } ],
  "title" : "title",
  "blog" : "blog",
  "resumes" : [ {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  }, {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  } ],
  "companyUserType" : "",
  "twitter" : "twitter",
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "hourlyTargetRate" : 5,
  "defaultCurrency" : "",
  "periods" : [ {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  }, {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  } ],
  "customerManagers" : [ {
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
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 2,
  "seoId" : "seoId",
  "homeAddress" : "",
  "image" : "",
  "locationName" : "locationName",
  "companyUserId" : 9,
  "employmentNumber" : "employmentNumber",
  "dateOfBirth" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
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
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "employmentStartDate" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 3,
  "taxTable" : "taxTable",
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "invoicingGoal" : 0,
  "provision" : 1,
  "companyAddress" : "",
  "employmentEndDate" : "2000-01-23T04:56:07.000+00:00",
  "selfCost" : 5,
  "status" : "",
  "homepage" : "homepage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete user from the system  Firstly, the user has to be disconnected, which can be done through a PATCH or PUT  This action is irreversible, use with caution
 * Requires access level: CompanyAdmin. 
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * firstName String CompanyUser FirstName (optional)
 * lastName String CompanyUser LastName (optional)
 * no response value expected for this operation
 **/
exports.deleteCompanyUser = function(companyId,id,firstName,lastName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Patch company user
 * Requires access level: CompanyAdmin. 
 *
 * body List Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyUserEmployeePatchDocument` for full type information per property (optional)
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserFullModel
 **/
exports.patchCompanyUser = function(body,companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 2,
  "teamManagers" : [ {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  }, {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  } ],
  "companyUserEmail" : "companyUserEmail",
  "lastName" : "lastName",
  "mobility" : 7,
  "gitHub" : "gitHub",
  "roles" : [ {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  }, {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  } ],
  "baseSalary" : 6,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "teamMembers" : [ {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  }, {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  } ],
  "title" : "title",
  "blog" : "blog",
  "resumes" : [ {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  }, {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  } ],
  "companyUserType" : "",
  "twitter" : "twitter",
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "hourlyTargetRate" : 5,
  "defaultCurrency" : "",
  "periods" : [ {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  }, {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  } ],
  "customerManagers" : [ {
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
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 2,
  "seoId" : "seoId",
  "homeAddress" : "",
  "image" : "",
  "locationName" : "locationName",
  "companyUserId" : 9,
  "employmentNumber" : "employmentNumber",
  "dateOfBirth" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
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
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "employmentStartDate" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 3,
  "taxTable" : "taxTable",
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "invoicingGoal" : 0,
  "provision" : 1,
  "companyAddress" : "",
  "employmentEndDate" : "2000-01-23T04:56:07.000+00:00",
  "selfCost" : 5,
  "status" : "",
  "homepage" : "homepage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update company user
 * Requires access level: CompanyAdmin. 
 *
 * body Users_id_body CompanyUserEditModel (optional)
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserFullModel
 **/
exports.updateCompanyUser = function(body,companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 2,
  "teamManagers" : [ {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  }, {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  } ],
  "companyUserEmail" : "companyUserEmail",
  "lastName" : "lastName",
  "mobility" : 7,
  "gitHub" : "gitHub",
  "roles" : [ {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  }, {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  } ],
  "baseSalary" : 6,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "teamMembers" : [ {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  }, {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  } ],
  "title" : "title",
  "blog" : "blog",
  "resumes" : [ {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  }, {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  } ],
  "companyUserType" : "",
  "twitter" : "twitter",
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "hourlyTargetRate" : 5,
  "defaultCurrency" : "",
  "periods" : [ {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  }, {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  } ],
  "customerManagers" : [ {
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
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 2,
  "seoId" : "seoId",
  "homeAddress" : "",
  "image" : "",
  "locationName" : "locationName",
  "companyUserId" : 9,
  "employmentNumber" : "employmentNumber",
  "dateOfBirth" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
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
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "employmentStartDate" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 3,
  "taxTable" : "taxTable",
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "invoicingGoal" : 0,
  "provision" : 1,
  "companyAddress" : "",
  "employmentEndDate" : "2000-01-23T04:56:07.000+00:00",
  "selfCost" : 5,
  "status" : "",
  "homepage" : "homepage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get company user by id
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserModel
 **/
exports.user = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 0,
  "teamManagers" : [ {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  }, {
    "companyUserId" : 6,
    "teamId" : 0,
    "companyUser" : "",
    "team" : ""
  } ],
  "companyUserEmail" : "companyUserEmail",
  "lastName" : "lastName",
  "mobility" : 6,
  "gitHub" : "gitHub",
  "roles" : [ {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  }, {
    "level" : "",
    "name" : "name",
    "description" : "description",
    "id" : 1
  } ],
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "teamMembers" : [ {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  }, {
    "availabilityPercent" : 1,
    "companyUserId" : 6,
    "teamId" : 0,
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "companyUser" : "",
    "team" : ""
  } ],
  "title" : "title",
  "blog" : "blog",
  "resumes" : [ {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  }, {
    "template" : "",
    "companyId" : 1,
    "companyUserId" : 6,
    "description" : "description",
    "isPublic" : true,
    "language" : "",
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
    "title" : "title",
    "slug" : "slug"
  } ],
  "companyUserType" : "",
  "twitter" : "twitter",
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "defaultCurrency" : "",
  "periods" : [ {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  }, {
    "absenceTypeId" : 1,
    "companyId" : 0,
    "companyUserId" : 6,
    "days" : [ {
      "calendarDay" : ""
    }, {
      "calendarDay" : ""
    } ],
    "extentPercentage" : 5,
    "id" : 5,
    "absenceTypeName" : "absenceTypeName"
  } ],
  "customerManagers" : [ {
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
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 2,
  "seoId" : "seoId",
  "homeAddress" : "",
  "image" : "",
  "locationName" : "locationName",
  "companyUserId" : 5,
  "employmentNumber" : "employmentNumber",
  "dateOfBirth" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
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
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "employmentStartDate" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 5,
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
  "employmentEndDate" : "2000-01-23T04:56:07.000+00:00",
  "status" : "",
  "homepage" : "homepage"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

