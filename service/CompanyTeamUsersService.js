'use strict';


/**
 * Add team member
 * Requires access level: CompanyAdmin. 
 *
 * body TeamId_users_body TeamMemberAddModel (optional)
 * companyId Integer Company Id
 * teamId Integer Team Id
 * returns List
 **/
exports.addTeamUser = function(body,companyId,teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
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
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get team members
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * returns List
 **/
exports.getTeamUsers = function(companyId,teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
  "seoId" : "seoId",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
}, {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
  "seoId" : "seoId",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove team member
 * Requires access level: CompanyAdmin. 
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * id Integer User Id
 * returns List
 **/
exports.removeTeamUser = function(companyId,teamId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
  "seoId" : "seoId",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
}, {
  "companyUserEmail" : "companyUserEmail",
  "image" : "",
  "lastName" : "lastName",
  "gitHub" : "gitHub",
  "companyUserId" : 0,
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "linkedIn" : "linkedIn",
  "title" : "title",
  "blog" : "blog",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "companyUserType" : "",
  "firstName" : "firstName",
  "twitter" : "twitter",
  "companyId" : 6,
  "internalIdentifier" : "internalIdentifier",
  "desiredAssignment" : "desiredAssignment",
  "companyAddress" : "",
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
  "seoId" : "seoId",
  "status" : "",
  "homeAddress" : "",
  "homepage" : "homepage"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

