'use strict';


/**
 * Get profiles list
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns List
 **/
exports.companyUserProfiles = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "presentation" : "",
  "companyId" : 1,
  "profileTranslation" : "",
  "companyUserId" : 5,
  "translations" : [ {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  }, {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  } ],
  "publishedWhen" : "2000-01-23T04:56:07.000+00:00",
  "profileTranslationId" : 5,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 6,
  "updatedWhen" : "2000-01-23T04:56:07.000+00:00",
  "createdWhen" : "2000-01-23T04:56:07.000+00:00"
}, {
  "presentation" : "",
  "companyId" : 1,
  "profileTranslation" : "",
  "companyUserId" : 5,
  "translations" : [ {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  }, {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  } ],
  "publishedWhen" : "2000-01-23T04:56:07.000+00:00",
  "profileTranslationId" : 5,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 6,
  "updatedWhen" : "2000-01-23T04:56:07.000+00:00",
  "createdWhen" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

