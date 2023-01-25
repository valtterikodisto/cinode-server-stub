'use strict';


/**
 * Get projects list from search criteria
 * Sample request  {      \"pipelines\": [4],      \"projectStates\": [0],      \"PageAndSortBy\": {      \"SortBy\": \"0\",      \"SortOrder\": \"1\",      \"Page\": \"1\",      \"ItemsPerPage\": \"15\",      }  }  SortBy Parameter can be:      CreatedDateTime=0 // Default      Title=1      Identifier=2      CustomerIdentifier=3      SeoId=4      UpdatedDateTime=6      LastTouchDateTime=7
 *
 * body Projects_search_body SearchCompanyCustomerQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchProjectsResultModel
 **/
exports.searchProject = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result" : [ {
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

