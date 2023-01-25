'use strict';


/**
 * Get company candidates note event with specified id
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventNoteModel
 **/
exports.companyCandidateEventNote = function(companyId,candidateId,id) {
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
  "createdByCompanyUserId" : 6,
  "visibility" : "",
  "companyCandidateId" : 0,
  "updatedByCompanyUserId" : 1,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "noteType" : "",
  "companyId" : 5,
  "noteDate" : "2000-01-23T04:56:07.000+00:00",
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
 * Delete company candidate note event
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCandidateEventNote = function(companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add new note event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Events_notes_body Note Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * no response value expected for this operation
 **/
exports.newCompanyCandidateEventNote = function(body,companyId,candidateId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update note event for company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body Notes_id_body Note Event details (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id UUID Event Id
 * returns CompanyCandidateEventNoteModel
 **/
exports.updateCompanyCandidateEventNote = function(body,companyId,candidateId,id) {
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
  "createdByCompanyUserId" : 6,
  "visibility" : "",
  "companyCandidateId" : 0,
  "updatedByCompanyUserId" : 1,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "noteType" : "",
  "companyId" : 5,
  "noteDate" : "2000-01-23T04:56:07.000+00:00",
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
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

