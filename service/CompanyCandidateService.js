'use strict';


/**
 * Create Candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body CompanyId_candidates_body CompanyCandidateAddModel (optional)
 * companyId Integer Company Id
 * no response value expected for this operation
 **/
exports.addCompanyCandidate = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Get Candidate by Id
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * id Integer Candidate Id
 * returns CompanyCandidateExtendedModel
 **/
exports.candidate = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "firstname" : "firstname",
  "attachments" : [ {
    "companyId" : 2,
    "attachmentType" : "",
    "companyCandidateId" : 4,
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
    "title" : "title"
  }, {
    "companyId" : 2,
    "attachmentType" : "",
    "companyCandidateId" : 4,
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
    "title" : "title"
  } ],
  "gender" : "",
  "rating" : 0,
  "salaryRequirement" : 1,
  "description" : "description",
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "title" : "title",
  "pipelineId" : 2,
  "recruitmentManagerId" : 9,
  "recruitmentManager" : "",
  "periodOfNoticeDays" : 6,
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ null, null ],
  "state" : "",
  "isMobile" : true,
  "id" : 7,
  "currencyId" : 5,
  "seoId" : "seoId",
  "email" : "email",
  "campaignCode" : "campaignCode",
  "pipelineStageId" : 7,
  "currentEmployer" : "currentEmployer",
  "linkedInUrl" : "linkedInUrl",
  "lastname" : "lastname",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 1,
  "birthYear" : 3,
  "phone" : "phone",
  "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
  "offeredSalary" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete candidate from the system  This action is irreversible, use with caution
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * companyId Integer Company Id
 * id Integer Candidate Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCandidate = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Patch company candidate
 * Requires access level: CompanyRecruiter. Requires module: Recruitment. 
 *
 * body List Only certain properties on the user are patchable. See the generated example for a list of available properties, using the `op: "replace"` as example. See the generated schema for `ICompanyCandidatePatchDocument` for full type information per property (optional)
 * companyId Integer Company Id
 * id Integer Candidate Id
 * returns CompanyCandidateExtendedModel
 **/
exports.patchCompanyCandidate = function(body,companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "lastName" : "lastName",
  "firstname" : "firstname",
  "attachments" : [ {
    "companyId" : 2,
    "attachmentType" : "",
    "companyCandidateId" : 4,
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
    "title" : "title"
  }, {
    "companyId" : 2,
    "attachmentType" : "",
    "companyCandidateId" : 4,
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
    "title" : "title"
  } ],
  "gender" : "",
  "rating" : 0,
  "salaryRequirement" : 1,
  "description" : "description",
  "createdDateTime" : "2000-01-23T04:56:07.000+00:00",
  "title" : "title",
  "pipelineId" : 2,
  "recruitmentManagerId" : 9,
  "recruitmentManager" : "",
  "periodOfNoticeDays" : 6,
  "availableFromDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ null, null ],
  "state" : "",
  "isMobile" : true,
  "id" : 7,
  "currencyId" : 5,
  "seoId" : "seoId",
  "email" : "email",
  "campaignCode" : "campaignCode",
  "pipelineStageId" : 7,
  "currentEmployer" : "currentEmployer",
  "linkedInUrl" : "linkedInUrl",
  "lastname" : "lastname",
  "updatedDateTime" : "2000-01-23T04:56:07.000+00:00",
  "firstName" : "firstName",
  "companyId" : 1,
  "birthYear" : 3,
  "phone" : "phone",
  "lastTouchDateTime" : "2000-01-23T04:56:07.000+00:00",
  "offeredSalary" : 5
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

