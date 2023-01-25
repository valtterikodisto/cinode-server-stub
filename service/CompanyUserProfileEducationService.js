'use strict';


/**
 * Get profile education by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileEducation Id
 * returns CompanyUserProfileEducationModel
 **/
exports.companyUserProfileEducation = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 3,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 6,
  "locationId" : 6,
  "translations" : [ {
    "profileTranslation" : "",
    "programName" : "programName",
    "profileId" : 6,
    "degree" : "degree",
    "description" : "description",
    "profileTranslationId" : 3,
    "profileEducationId" : 5,
    "schoolName" : "schoolName"
  }, {
    "profileTranslation" : "",
    "programName" : "programName",
    "profileId" : 6,
    "degree" : "degree",
    "description" : "description",
    "profileTranslationId" : 3,
    "profileEducationId" : 5,
    "schoolName" : "schoolName"
  } ],
  "companyUserId" : 7,
  "links" : [ null, null ],
  "id" : 0,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
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
 * Delete Profile Education
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileEducation = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Profile Education
 *
 * body Profile_educations_body CompanyUserProfileEducationAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileEducation = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Education
 *
 * body Educations_id_body CompanyUserProfileEducationAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileEducationModel
 **/
exports.updateCompanyUserProfileEducation = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 3,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 6,
  "locationId" : 6,
  "translations" : [ {
    "profileTranslation" : "",
    "programName" : "programName",
    "profileId" : 6,
    "degree" : "degree",
    "description" : "description",
    "profileTranslationId" : 3,
    "profileEducationId" : 5,
    "schoolName" : "schoolName"
  }, {
    "profileTranslation" : "",
    "programName" : "programName",
    "profileId" : 6,
    "degree" : "degree",
    "description" : "description",
    "profileTranslationId" : 3,
    "profileEducationId" : 5,
    "schoolName" : "schoolName"
  } ],
  "companyUserId" : 7,
  "links" : [ null, null ],
  "id" : 0,
  "startDate" : "2000-01-23T04:56:07.000+00:00",
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

