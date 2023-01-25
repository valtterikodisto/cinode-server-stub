'use strict';


/**
 * Add Role Skill
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body RoleId_skills_body ProjectAssignmentMemberSkillAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * returns ProjectAssignmentSkillModel
 **/
exports.addProjectAssignmentSkill = function(body,companyId,projectId,roleId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keywordSynonym" : "",
  "keywordId" : 2,
  "keywordSynonymId" : 0,
  "level" : 7,
  "projectAssignment" : "",
  "project" : "",
  "companyId" : 6,
  "projectAssignmentId" : 5,
  "customerId" : 1,
  "company" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "keyword" : "",
  "projectId" : 5,
  "isMandatory" : true,
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
 * Delete Role Skill
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * id Integer Keyword Id
 * returns ProjectAssignmentSkillModel
 **/
exports.deleteProjectAssignmentSkill = function(companyId,projectId,roleId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keywordSynonym" : "",
  "keywordId" : 2,
  "keywordSynonymId" : 0,
  "level" : 7,
  "projectAssignment" : "",
  "project" : "",
  "companyId" : 6,
  "projectAssignmentId" : 5,
  "customerId" : 1,
  "company" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "keyword" : "",
  "projectId" : 5,
  "isMandatory" : true,
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
 * Update Role Skill
 * Requires access level: CompanyManager. Requires module: Assignments. 
 *
 * body Skills_id_body_4 ProjectAssignmentMemberSkillAddModel (optional)
 * companyId Integer Company Id
 * projectId Integer Project Id
 * roleId Integer Role Id
 * id Integer Keyword Id
 * returns ProjectAssignmentSkillModel
 **/
exports.updateProjectAssignmentSkill = function(body,companyId,projectId,roleId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keywordSynonym" : "",
  "keywordId" : 2,
  "keywordSynonymId" : 0,
  "level" : 7,
  "projectAssignment" : "",
  "project" : "",
  "companyId" : 6,
  "projectAssignmentId" : 5,
  "customerId" : 1,
  "company" : "",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "keyword" : "",
  "projectId" : 5,
  "isMandatory" : true,
  "customer" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

