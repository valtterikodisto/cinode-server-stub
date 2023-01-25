'use strict';


/**
 * Add subcontractor
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * body CompanyId_subcontractors_body CompanyUserSubcontractorAddEditModel (optional)
 * companyId Integer Company Id
 * returns CompanyUserSubcontractorModel
 **/
exports.addCompanyUserSubcontractor = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "attachments" : [ {
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 5,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 5,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "gitHub" : "gitHub",
  "companyName" : "companyName",
  "rating" : 2,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "companyIdentifier" : "companyIdentifier",
  "defaultCurrency" : "",
  "tariff" : 0,
  "links" : [ null, null ],
  "id" : 3,
  "seoId" : "seoId",
  "email" : "email",
  "homeAddress" : "",
  "image" : "",
  "companyUserId" : 7,
  "groups" : [ {
    "companyId" : 1,
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
    "id" : 6
  }, {
    "companyId" : 1,
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
    "id" : 6
  } ],
  "linkedIn" : "linkedIn",
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
  "firstName" : "firstName",
  "companyId" : 9,
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyUserSubcontractorModel
 **/
exports.companySubcontractor = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "attachments" : [ {
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 5,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  }, {
    "companyId" : 5,
    "attachmentType" : "",
    "companyUserId" : 5,
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title"
  } ],
  "gitHub" : "gitHub",
  "companyName" : "companyName",
  "rating" : 2,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "companyIdentifier" : "companyIdentifier",
  "defaultCurrency" : "",
  "tariff" : 0,
  "links" : [ null, null ],
  "id" : 3,
  "seoId" : "seoId",
  "email" : "email",
  "homeAddress" : "",
  "image" : "",
  "companyUserId" : 7,
  "groups" : [ {
    "companyId" : 1,
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
    "id" : 6
  }, {
    "companyId" : 1,
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
    "id" : 6
  } ],
  "linkedIn" : "linkedIn",
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
  "firstName" : "firstName",
  "companyId" : 9,
  "internalIdentifier" : "internalIdentifier",
  "phone" : "phone",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
 * Delete subcontractor from the system  This action is irreversible, use with caution
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * companyId Integer Company Id
 * id Integer Subcontractor Id
 * firstName String Subcontractor FirstName (optional)
 * lastName String Subcontractor LastName (optional)
 * no response value expected for this operation
 **/
exports.deleteCompanySubcontractor = function(companyId,id,firstName,lastName) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

