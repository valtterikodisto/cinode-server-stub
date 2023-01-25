'use strict';


/**
 * Requires access level: CompanyAdmin. Requires module: Webhooks. 
 *
 * body List  (optional)
 * companyId Integer 
 * returns List
 **/
exports.installWebhookManifest = function(body,companyId) {
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


/**
 * Add Webhook
 * Sample request:                    POST /v0.1/companies/1/webhooks      {          \"isActive\": false,          \"endpointUrl\": \"https://webhook.site/7a619ffb-e67c-41fc-8113-083d6013f76c\",          \"configurations\": [              {                  \"entityType\": 1,                  \"actionType\": 1              }          ],          \"credentials\": [              {                  \"isBasicAuthentication\": true,                  \"headerName\": \"user\",                  \"headerValue\": \"somevalue\"              }          ]      }
 *
 * body CompanyId_webhooks_body WebhookAddModel (optional)
 * companyId Integer Company Id
 * returns WebhookModel
 **/
exports.newWebhook = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
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
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove webhook
 * Sample request:                    DELETE /v0.1/companies/1/webhooks/42a3a220-766c-eb11-8e13-000c29b4e92f
 *
 * companyId Integer Company Id
 * id UUID Webhook Id
 * no response value expected for this operation
 **/
exports.removeWebhook = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

