'use strict';


/**
 * Delete project event task
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * no response value expected for this operation
 **/
exports.deleteProjectTask = function(companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add project event task
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Events_tasks_body_16 ProjectEventTaskAddEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * returns ProjectEventTaskModel
 **/
exports.newProjectTask = function(body,companyId,projectId) {
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
  "type" : "",
  "title" : "title",
  "hasTime" : true,
  "taskType" : "",
  "companyId" : 2,
  "dueDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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
 * Get project event task by id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * returns ProjectEventTaskModel
 **/
exports.projectEventTask = function(companyId,projectId,id) {
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
  "type" : "",
  "title" : "title",
  "hasTime" : true,
  "taskType" : "",
  "companyId" : 2,
  "dueDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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
 * Update project event task
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Tasks_id_body_16 ProjectEventTaskAddEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id UUID Event Id
 * returns ProjectEventTaskModel
 **/
exports.updateProjectTask = function(body,companyId,projectId,id) {
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
  "type" : "",
  "title" : "title",
  "hasTime" : true,
  "taskType" : "",
  "companyId" : 2,
  "dueDateTime" : "2000-01-23T04:56:07.000+00:00",
  "customerId" : 0,
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

