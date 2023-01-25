'use strict';


/**
 * Get profile reference by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileReference Id
 * returns CompanyUserProfileReferenceModel
 **/
exports.companyUserProfileReference = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "profileWorkExperienceId" : 5,
  "companyId" : 6,
  "profileId" : 7,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 4,
    "profileReferenceId" : 3,
    "company" : "company",
    "profileTranslationId" : 0,
    "position" : "position",
    "text" : "text"
  }, {
    "profileTranslation" : "",
    "profileId" : 4,
    "profileReferenceId" : 3,
    "company" : "company",
    "profileTranslationId" : 0,
    "position" : "position",
    "text" : "text"
  } ],
  "companyUserId" : 4,
  "telephone" : "telephone",
  "links" : [ null, null ],
  "id" : 1,
  "email" : "email",
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
 * Delete Profile Reference Item
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileReference = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Profile Reference Item
 *
 * body Profile_references_body CompanyUserProfileReferenceAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileReference = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Reference Item
 *
 * body References_id_body CompanyUserProfileReferenceAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileReferenceModel
 **/
exports.updateCompanyUserProfileReference = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "firstName" : "firstName",
  "lastName" : "lastName",
  "profileWorkExperienceId" : 5,
  "companyId" : 6,
  "profileId" : 7,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 4,
    "profileReferenceId" : 3,
    "company" : "company",
    "profileTranslationId" : 0,
    "position" : "position",
    "text" : "text"
  }, {
    "profileTranslation" : "",
    "profileId" : 4,
    "profileReferenceId" : 3,
    "company" : "company",
    "profileTranslationId" : 0,
    "position" : "position",
    "text" : "text"
  } ],
  "companyUserId" : 4,
  "telephone" : "telephone",
  "links" : [ null, null ],
  "id" : 1,
  "email" : "email",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

