'use strict';


/**
 * Get company webhooks
 * Sample request:        GET /v0.1/companies/1/webhooks
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyWebhooks = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "credentials" : [ {
    "isBasicAuthentication" : true,
    "headerName" : "headerName"
  }, {
    "isBasicAuthentication" : true,
    "headerName" : "headerName"
  } ],
  "endpointUrl" : "endpointUrl",
  "configurations" : [ {
    "actionType" : "",
    "entityType" : ""
  }, {
    "actionType" : "",
    "entityType" : ""
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "isActive" : true
}, {
  "credentials" : [ {
    "isBasicAuthentication" : true,
    "headerName" : "headerName"
  }, {
    "isBasicAuthentication" : true,
    "headerName" : "headerName"
  } ],
  "endpointUrl" : "endpointUrl",
  "configurations" : [ {
    "actionType" : "",
    "entityType" : ""
  }, {
    "actionType" : "",
    "entityType" : ""
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "isActive" : true
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

