'use strict';


/**
 * Get company user, including financial fields, by id
 * Requires access level: CompanyAdmin. 
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserFullModel
 **/
exports.userFull = function(companyId,id) {
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

