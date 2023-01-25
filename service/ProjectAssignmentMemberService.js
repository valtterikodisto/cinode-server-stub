'use strict';


/**
 * Add Role Member Employee
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Members_employee_body ProjectAssignmentMemberEmployeeAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * returns ProjectAssignmentModel
 **/
exports.addProjectAssignmentMemberEmployee = function(body,companyId,projectId,roleId) {
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
 * Add Role Member Subcontractor
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Members_subcontractor_body ProjectAssignmentMemberSubcontractorAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * returns ProjectAssignmentModel
 **/
exports.addProjectAssignmentMemberSubcontractor = function(body,companyId,projectId,roleId) {
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
 * Delete Role Member
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * id Integer Role Member Id
 * returns ProjectAssignmentModel
 **/
exports.deleteProjectAssignmentMemberEmployee = function(companyId,projectId,roleId,id) {
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
 * Edit Role Member Employee
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Employee_id_body ProjectAssignmentMemberSubcontractorAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * id Integer Role Member Id
 * returns ProjectAssignmentModel
 **/
exports.updateProjectAssignmentMemberEmployee = function(body,companyId,projectId,roleId,id) {
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
 * Edit Role Member Subcontractor
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Subcontractor_id_body ProjectAssignmentMemberSubcontractorAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * id Integer Role Member Id
 * returns ProjectAssignmentModel
 **/
exports.updateProjectAssignmentMemberSubcontractor = function(body,companyId,projectId,roleId,id) {
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

