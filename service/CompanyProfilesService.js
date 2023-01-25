'use strict';


/**
 * Get profiles list
 * Sample request:        POST /v0.1/companies/1/profiles      {          \"createdOffsetDays\": 90,          \"updatedOffsetDays\": 30,          \"pageAndSortBy\": {                           \"page\": 1,              \"itemsPerPage\": 15,              \"order\": 0,              \"sortBy\": 1          }      }
 *
 * body CompanyId_profiles_body Company Profile Filter (optional)
 * companyId Integer Company Id
 * returns CompanyProfilesModel
 **/
exports.companyProfiles = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "totalItems" : 0,
  "profiles" : [ {
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
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

