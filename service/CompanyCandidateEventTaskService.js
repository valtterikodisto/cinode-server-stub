'use strict';


/**
 * Get company candidates task event with specified id
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventTaskModel
 **/
exports.companyCandidateEventTask = function(companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  }, {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  } ],
  "assignedToCompanyUserId" : 6,
  "createdByCompanyUserId" : 1,
  "visibility" : "",
  "companyCandidateId" : 0,
  "updatedByCompanyUserId" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "hasTime" : true,
  "taskType" : "",
  "companyId" : 5,
  "dueDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "status" : "",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete company candidate task event
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCandidateEventTask = function(companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add new task event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Events_tasks_body Task Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * no response value expected for this operation
 **/
exports.newCompanyCandidateEventTask = function(body,companyId,candidateId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update task event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Tasks_id_body Task Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventTaskModel
 **/
exports.updateCompanyCandidateEventTask = function(body,companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  }, {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  } ],
  "assignedToCompanyUserId" : 6,
  "createdByCompanyUserId" : 1,
  "visibility" : "",
  "companyCandidateId" : 0,
  "updatedByCompanyUserId" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "hasTime" : true,
  "taskType" : "",
  "companyId" : 5,
  "dueDateTime" : "2000-01-23T04:56:07.000+00:00",
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
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "status" : "",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

