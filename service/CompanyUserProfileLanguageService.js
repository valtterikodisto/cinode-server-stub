'use strict';


/**
 * Get profile language by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileLanguage Id
 * returns CompanyUserProfileLanguageModel
 **/
exports.companyUserProfileLanguage = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 8,
  "level" : 1,
  "profileId" : 2,
  "companyUserId" : 6,
  "language" : "",
  "links" : [ null, null ],
  "id" : 4,
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
 * Delete Language Profile Item
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileLanguage = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Language Profile Item
 *
 * body Profile_languages_body CompanyUserProfileLanguageAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileLanguage = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Language Profile Item
 *
 * body Languages_id_body CompanyUserProfileExtraSkillAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileLanguageModel
 **/
exports.updateCompanyUserProfileLanguage = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 8,
  "level" : 1,
  "profileId" : 2,
  "companyUserId" : 6,
  "language" : "",
  "links" : [ null, null ],
  "id" : 4,
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

