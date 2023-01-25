'use strict';


/**
 * Add team manager
 * Sample request:                    POST /v0.1/companies/1/teams/1234/managers      {          \"teamId\" : 1234,          \"companyUserId\" : 54632      }
 *
 * body TeamId_managers_body TeamMemberEditModel (optional)
 * companyId Integer Company Id
 * teamId String 
 * returns List
 **/
exports.addTeamManager = function(body,companyId,teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyUserId" : 6,
  "teamId" : 0,
  "companyUser" : "",
  "team" : ""
}, {
  "companyUserId" : 6,
  "teamId" : 0,
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
 * Remove team manager
 * Sample request:                    DELETE /v0.1/companies/1/teams/1234/managers/54632
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * id Integer User Id
 * no response value expected for this operation
 **/
exports.removeTeamManager = function(companyId,teamId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get team managers
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * returns List
 **/
exports.teamManagers = function(companyId,teamId) {
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

