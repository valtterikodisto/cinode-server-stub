'use strict';


/**
 * Get profile skill by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileSkill Id
 * returns CompanyUserProfileSkillModel
 **/
exports.companyUserProfileSkill = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "changeHistory" : [ {
    "keywordId" : 5,
    "level" : 1,
    "profileId" : 4,
    "id" : 7,
    "favourite" : true,
    "changeDateTime" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "keywordId" : 5,
    "level" : 1,
    "profileId" : 4,
    "id" : 7,
    "favourite" : true,
    "changeDateTime" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "level" : 1,
  "companyUserId" : 3,
  "favourite" : true,
  "url" : "url",
  "levelGoalDeadline" : "2000-01-23T04:56:07.000+00:00",
  "companyId" : 6,
  "levelGoal" : 6,
  "profileId" : 1,
  "translations" : [ {
    "keywordId" : 9,
    "keywordSynonym" : "",
    "keywordSynonymId" : 9,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "keyword" : ""
  }, {
    "keywordId" : 9,
    "keywordSynonym" : "",
    "keywordSynonymId" : 9,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "keyword" : ""
  } ],
  "links" : [ null, null ],
  "numberOfDaysWorkExperience" : 9,
  "id" : 6,
  "keyword" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Profile Skill
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileSkill = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add Skill to profile
 *
 * body Profile_skills_body CompanyUserProfileSkillAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileSkill = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Skill
 *
 * body Skills_id_body CompanyUserProfileSkillEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileSkillModel
 **/
exports.updateCompanyUserProfileSkill = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "changeHistory" : [ {
    "keywordId" : 5,
    "level" : 1,
    "profileId" : 4,
    "id" : 7,
    "favourite" : true,
    "changeDateTime" : "2000-01-23T04:56:07.000+00:00"
  }, {
    "keywordId" : 5,
    "level" : 1,
    "profileId" : 4,
    "id" : 7,
    "favourite" : true,
    "changeDateTime" : "2000-01-23T04:56:07.000+00:00"
  } ],
  "level" : 1,
  "companyUserId" : 3,
  "favourite" : true,
  "url" : "url",
  "levelGoalDeadline" : "2000-01-23T04:56:07.000+00:00",
  "companyId" : 6,
  "levelGoal" : 6,
  "profileId" : 1,
  "translations" : [ {
    "keywordId" : 9,
    "keywordSynonym" : "",
    "keywordSynonymId" : 9,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "keyword" : ""
  }, {
    "keywordId" : 9,
    "keywordSynonym" : "",
    "keywordSynonymId" : 9,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "keyword" : ""
  } ],
  "links" : [ null, null ],
  "numberOfDaysWorkExperience" : 9,
  "id" : 6,
  "keyword" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

