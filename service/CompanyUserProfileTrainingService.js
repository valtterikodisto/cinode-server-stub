'use strict';


/**
 * Get profile training by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileTraining Id
 * returns CompanyUserProfileTrainingModel
 **/
exports.companyUserProfileTraining = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trainingType" : "",
  "companyId" : 3,
  "code" : "code",
  "year" : 0,
  "profileId" : 7,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 8,
    "supplier" : "supplier",
    "description" : "description",
    "profileTrainingId" : 4,
    "profileTranslationId" : 7,
    "title" : "title",
    "issuer" : "issuer"
  }, {
    "profileTranslation" : "",
    "profileId" : 8,
    "supplier" : "supplier",
    "description" : "description",
    "profileTrainingId" : 4,
    "profileTranslationId" : 7,
    "title" : "title",
    "issuer" : "issuer"
  } ],
  "companyUserId" : 3,
  "expireDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ null, null ],
  "id" : 6,
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
 * Delete Profile Training Item
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileTraining = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Profile Training Item
 *
 * body Profile_trainings_body CompanyUserProfileTrainingAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileTraining = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Training Item
 *
 * body Trainings_id_body CompanyUserProfileTrainingAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileTrainingModel
 **/
exports.updateCompanyUserProfileTraining = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "trainingType" : "",
  "companyId" : 3,
  "code" : "code",
  "year" : 0,
  "profileId" : 7,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 8,
    "supplier" : "supplier",
    "description" : "description",
    "profileTrainingId" : 4,
    "profileTranslationId" : 7,
    "title" : "title",
    "issuer" : "issuer"
  }, {
    "profileTranslation" : "",
    "profileId" : 8,
    "supplier" : "supplier",
    "description" : "description",
    "profileTrainingId" : 4,
    "profileTranslationId" : 7,
    "title" : "title",
    "issuer" : "issuer"
  } ],
  "companyUserId" : 3,
  "expireDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ null, null ],
  "id" : 6,
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

