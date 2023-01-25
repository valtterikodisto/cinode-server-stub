'use strict';


/**
 * Get company candidates meeting event with specified id
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventMeetingModel
 **/
exports.companyCandidateEventMeeting = function(companyId,candidateId,id) {
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
  "endDateTime" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "title" : "title",
  "companyId" : 5,
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "location" : "location",
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
 * Delete company candidate meeting event
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCandidateEventMeeting = function(companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add new meeting event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Events_meetings_body Meeting Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * no response value expected for this operation
 **/
exports.newCompanyCandidateEventMeeting = function(body,companyId,candidateId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update meeting event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Meetings_id_body Meeting Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventMeetingModel
 **/
exports.updateCompanyCandidateEventMeeting = function(body,companyId,candidateId,id) {
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
  "endDateTime" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "title" : "title",
  "companyId" : 5,
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "location" : "location",
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

