'use strict';


/**
 * Get profile external skill by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileExtSkill Id
 * returns CompanyUserProfileExtSkillModel
 **/
exports.companyUserProfileExtSkill = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 9,
  "profileId" : 4,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 9,
    "profileTranslationId" : 0,
    "profileExtSkillId" : 7,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "profileId" : 9,
    "profileTranslationId" : 0,
    "profileExtSkillId" : 7,
    "title" : "title"
  } ],
  "companyUserId" : 0,
  "links" : [ null, null ],
  "id" : 7,
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete Extra Skill Profile Item
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileExtSkill = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Extra Skill Profile Item
 *
 * body Profile_extskills_body CompanyUserProfileExtSkillAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileExtSkill = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Extra Skill Profile Item
 *
 * body Extskills_id_body CompanyUserProfileExtraSkillAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileExtSkillModel
 **/
exports.updateCompanyUserProfileExtSkill = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 9,
  "profileId" : 4,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 9,
    "profileTranslationId" : 0,
    "profileExtSkillId" : 7,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "profileId" : 9,
    "profileTranslationId" : 0,
    "profileExtSkillId" : 7,
    "title" : "title"
  } ],
  "companyUserId" : 0,
  "links" : [ null, null ],
  "id" : 7,
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

