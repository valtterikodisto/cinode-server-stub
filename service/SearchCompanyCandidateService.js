'use strict';


/**
 * Get company candidates list from search criteria
 * Sample request:        POST /v0.1/companies/1/candidates/search      {          \"term\": \"candidate property value\",          \"rating\": 3                   \"status\": 0,          \"sources\": [],          \"noRecruiter\": false,          \"recruiters\": [],          \"states\": [0],          \"pipeline\": null,          \"pageAndSortBy\": {              \"page\": 1,              \"itemsPerPage\": 15          },          \"pipelines\": []      }
 *
 * body Candidates_search_body SearchCompanyCandidateQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchCompanyCandidateResultModel
 **/
exports.searchCompanyCandidate = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "firstname" : "firstname",
    "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
    "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
    "seoId" : "seoId",
    "lastname" : "lastname",
    "updatedDateTime" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "firstname" : "firstname",
    "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
    "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
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
    "seoId" : "seoId",
    "lastname" : "lastname",
    "updatedDateTime" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "hits" : 0,
  "totalItems" : 6,
  "pagedAndSortedBy" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

