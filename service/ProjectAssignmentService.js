'use strict';


/**
 * Delete Role
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id Integer ProjectAssignment Id
 * returns ProjectAssignmentModel
 **/
exports.deleteProjectAssignment = function(companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extent" : 1,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "prospects" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  } ],
  "contractType" : "",
  "project" : "",
  "description" : "description",
  "title" : "title",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  }, {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  } ],
  "rate" : 7,
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 7,
  "seoId" : "seoId",
  "projectAssignmentMemberId" : 4,
  "extentType" : "",
  "companyId" : 1,
  "isAssigned" : true,
  "assigned" : "",
  "projectId" : 6,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Add Role
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body ProjectId_roles_body ProjectAssignmentAddEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * returns ProjectAssignmentModel
 **/
exports.newProjectAssignment = function(body,companyId,projectId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extent" : 1,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "prospects" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  } ],
  "contractType" : "",
  "project" : "",
  "description" : "description",
  "title" : "title",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  }, {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  } ],
  "rate" : 7,
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 7,
  "seoId" : "seoId",
  "projectAssignmentMemberId" : 4,
  "extentType" : "",
  "companyId" : 1,
  "isAssigned" : true,
  "assigned" : "",
  "projectId" : 6,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get projectassignment by id (Obsolete)
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id Integer ProjectAssignment Id
 * returns ProjectAssignmentModel
 **/
exports.oldProjectAssignment = function(companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extent" : 1,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "prospects" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  } ],
  "contractType" : "",
  "project" : "",
  "description" : "description",
  "title" : "title",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  }, {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  } ],
  "rate" : 7,
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 7,
  "seoId" : "seoId",
  "projectAssignmentMemberId" : 4,
  "extentType" : "",
  "companyId" : 1,
  "isAssigned" : true,
  "assigned" : "",
  "projectId" : 6,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Role by id
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id Integer ProjectAssignment Id
 * returns ProjectAssignmentModel
 **/
exports.projectAssignment = function(companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extent" : 1,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "prospects" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  } ],
  "contractType" : "",
  "project" : "",
  "description" : "description",
  "title" : "title",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  }, {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  } ],
  "rate" : 7,
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 7,
  "seoId" : "seoId",
  "projectAssignmentMemberId" : 4,
  "extentType" : "",
  "companyId" : 1,
  "isAssigned" : true,
  "assigned" : "",
  "projectId" : 6,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Edit Role
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Roles_id_body ProjectAssignmentEditModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * id Integer ProjectAssignment Id
 * returns ProjectAssignmentModel
 **/
exports.updateProjectAssignment = function(body,companyId,projectId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extent" : 1,
  "oralAgreementToDate" : "2000-01-23T04:56:07.000+00:00",
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "prospects" : [ {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  }, {
    "firstName" : "firstName",
    "lastName" : "lastName",
    "companyId" : 6,
    "projectAssignmentMemberState" : "",
    "companyUserId" : 0,
    "projectAssignmentMemberId" : 5,
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
    "companyUserType" : "",
    "status" : ""
  } ],
  "contractType" : "",
  "project" : "",
  "description" : "description",
  "title" : "title",
  "optionToDate" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  }, {
    "keywordId" : 3,
    "companyId" : 5,
    "projectAssignmentId" : 9,
    "level" : 2,
    "customerId" : 2,
    "links" : [ null, null ],
    "keyword" : "",
    "projectId" : 7
  } ],
  "rate" : 7,
  "customerId" : 1,
  "company" : "",
  "currency" : "",
  "links" : [ null, null ],
  "id" : 7,
  "seoId" : "seoId",
  "projectAssignmentMemberId" : 4,
  "extentType" : "",
  "companyId" : 1,
  "isAssigned" : true,
  "assigned" : "",
  "projectId" : 6,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

