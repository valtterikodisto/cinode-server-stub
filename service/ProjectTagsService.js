'use strict';


/**
 * Edit Tags for Project
 * Note:        Posted tags will replace any existing tags for the project.      A new tag will be created, if the id for a tag not provided.                Sample request:        POST /v0.1/companies/1/projects/19870/tags      [          {              \"name\": \"tag-name\",              \"id\": 2          },          {              \"name\": \"tag-test\",              \"id\": 1          },      ]
 *
 * body List CompanyTagModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * returns ProjectModel
 **/
exports.editProjectTags = function(body,companyId,projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "googleId" : "googleId",
  "salesManagers" : [ null, null ],
  "customerContacts" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "customerId" : 1,
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
    "slug" : "slug",
    "email" : "email"
  } ],
  "assignments" : [ {
    "companyId" : 0,
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "customerId" : 6,
    "project" : "",
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
    "id" : 5,
    "title" : "title",
    "projectId" : 1,
    "startDate" : "2000-01-23T04:56:07.000+00:00",
    "customer" : ""
  }, {
    "companyId" : 0,
    "endDate" : "2000-01-23T04:56:07.000+00:00",
    "customerId" : 6,
    "project" : "",
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
    "id" : 5,
    "title" : "title",
    "projectId" : 1,
    "startDate" : "2000-01-23T04:56:07.000+00:00",
    "customer" : ""
  } ],
  "attachments" : [ {
    "companyId" : 7,
    "attachmentType" : "",
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title",
    "projectId" : 2
  }, {
    "companyId" : 7,
    "attachmentType" : "",
    "description" : "description",
    "links" : [ null, null ],
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "title" : "title",
    "projectId" : 2
  } ],
  "intermediatorContacts" : [ null, null ],
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "salesManagerIds" : [ 1, 1 ],
  "projectManagerIds" : [ 6, 6 ],
  "title" : "title",
  "pipelineId" : 9,
  "estimatedValue" : 1,
  "locationId" : 0,
  "salesManager" : "",
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 4,
  "customerIdentifier" : "customerIdentifier",
  "seoId" : "seoId",
  "events" : [ {
    "companyId" : 5,
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
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "",
    "title" : "title",
    "projectId" : 5,
    "eventDate" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "companyId" : 5,
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
    "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "type" : "",
    "title" : "title",
    "projectId" : 5,
    "eventDate" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "identifier" : "identifier",
  "currentStageId" : 3,
  "projectReferences" : [ {
    "companyId" : 4,
    "language" : "language",
    "links" : [ null, null ],
    "id" : 2,
    "text" : "text",
    "title" : "title",
    "projectId" : 7
  }, {
    "companyId" : 4,
    "language" : "language",
    "links" : [ null, null ],
    "id" : 2,
    "text" : "text",
    "title" : "title",
    "projectId" : 7
  } ],
  "updatedBy" : "",
  "probability" : 6,
  "priority" : "",
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
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "estimatedCloseDate" : "2000-01-23T04:56:07.000+00:00",
  "companyId" : 7,
  "createdBy" : "",
  "teamId" : 1,
  "intermediator" : "",
  "currentState" : "",
  "managers" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyUserId" : 0,
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
    "companyUserType" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "companyUserId" : 0,
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
    "companyUserType" : ""
  } ],
  "stateReasonId" : 1,
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

