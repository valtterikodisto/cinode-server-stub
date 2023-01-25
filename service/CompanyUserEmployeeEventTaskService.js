'use strict';


/**
 * Get employee task event
 * Requires access level: CompanyManager. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event Id
 * returns CompanyUserEventTaskModel
 **/
exports.companyUserEmployeeEventTask = function(companyId,companyUserId,id) {
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
  "updatedByCompanyUserId" : 5,
  "companyUserId" : 0,
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
 * Deletes meeting event
 * Requires access level: CompanyManager. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserEmployeeEventTask = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates new employee task event
 * Requires access level: CompanyManager. 
 *
 * body Events_tasks_body_8 Task event details (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserEmployeeEventTask = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates employee's task event
 * Requires access level: CompanyManager. 
 *
 * body Tasks_id_body_8 Task event details (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event id
 * returns CompanyUserEventTaskModel
 **/
exports.updateCompanyUserEmployeeEventTask = function(body,companyId,companyUserId,id) {
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
  "updatedByCompanyUserId" : 5,
  "companyUserId" : 0,
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

