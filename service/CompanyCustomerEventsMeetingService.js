'use strict';


/**
 * Get customer event meeting by id
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id UUID Event Id
 * returns CustomerEventMeetingModel
 **/
exports.companyCustomerEventMeeting = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "customerContactId" : 0,
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
  "customerId" : 6,
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
 * Delete customer event meeting
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteMeeting = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add customer event meeting
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Events_meetings_body_4 CustomerEventMeetingAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * returns CustomerEventMeetingModel
 **/
exports.newMeeting = function(body,companyId,customerId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "customerContactId" : 0,
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
  "customerId" : 6,
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
 * Update customer event meeting
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * body Meetings_id_body_4 CustomerEventMeetingAddEditModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id UUID Event Id
 * returns CustomerEventMeetingModel
 **/
exports.updateMeeting = function(body,companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "customerContactId" : 0,
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
  "customerId" : 6,
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

