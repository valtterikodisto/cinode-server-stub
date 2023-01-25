'use strict';


/**
 * Delete project event meeting
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteProjectMeeting = function(companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add project event meeting
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Events_meetings_body_16 ProjectEventMeetingAddEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * returns ProjectEventMeetingModel
 **/
exports.newProjectMeeting = function(body,companyId,projectId) {
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
  "assignedToCompanyUserId" : 1,
  "createdByCompanyUserId" : 5,
  "visibility" : "",
  "updatedByCompanyUserId" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "endDateTime" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "title" : "title",
  "companyId" : 2,
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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
  "projectId" : 6,
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
 * Get project event meeting by id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * returns ProjectEventMeetingModel
 **/
exports.projectEventMeeting = function(companyId,projectId,id) {
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
  "assignedToCompanyUserId" : 1,
  "createdByCompanyUserId" : 5,
  "visibility" : "",
  "updatedByCompanyUserId" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "endDateTime" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "title" : "title",
  "companyId" : 2,
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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
  "projectId" : 6,
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
 * Update project event meeting
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Meetings_id_body_16 ProjectEventMeetingAddEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * returns ProjectEventMeetingModel
 **/
exports.updateProjectMeeting = function(body,companyId,projectId,id) {
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
  "assignedToCompanyUserId" : 1,
  "createdByCompanyUserId" : 5,
  "visibility" : "",
  "updatedByCompanyUserId" : 5,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "endDateTime" : "2000-01-23T04:56:07.000+00:00",
  "type" : "",
  "title" : "title",
  "companyId" : 2,
  "startDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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
  "projectId" : 6,
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

