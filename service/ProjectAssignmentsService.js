'use strict';


/**
 * Get Roles by Filter  Rate limited, restricted to once per minute, max 1000 requests per day
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body CompanyId_roles_body Filter options (optional)
 * companyId Integer Company Id
 * returns ProjectAssignmentWithStatusModel
 **/
exports.searchRoles = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "projectAssignmentExtent" : 2,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "projectAssignmentExtentType" : "",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "probability" : 5,
  "projectAssignmentAllocationStatus" : "",
  "projectAssignmentMemberType" : "",
  "pipelineId" : 0,
  "projectState" : "",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "estimatedCloseDate" : "2000-01-23T04:56:07.000+00:00",
  "projectAssignmentId" : 5,
  "rate" : 7,
  "customerId" : 6,
  "assigned" : "",
  "projectId" : 1,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "projectPipelineStageTitle" : "projectPipelineStageTitle"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

