'use strict';


/**
 * Get profile commitment by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileCommitment Id
 * returns CompanyUserProfileCommitmentModel
 **/
exports.companyUserProfileCommitment = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 4,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 5,
  "translations" : [ {
    "profileCommitmentId" : 4,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "title" : "title"
  }, {
    "profileCommitmentId" : 4,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "title" : "title"
  } ],
  "companyUserId" : 3,
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
 * Delete Commitment
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileCommitment = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Profile Commitment
 *
 * body Profile_commitments_body CompanyUserProfileCommitmentAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileCommitment = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Commitment
 *
 * body Commitments_id_body CompanyUserProfileCommitmentAddEditModel (optional)
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns CompanyUserProfileCommitmentModel
 **/
exports.updateCompanyUserProfileCommitment = function(body,id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 4,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 5,
  "translations" : [ {
    "profileCommitmentId" : 4,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "title" : "title"
  }, {
    "profileCommitmentId" : 4,
    "profileTranslation" : "",
    "profileId" : 6,
    "profileTranslationId" : 8,
    "title" : "title"
  } ],
  "companyUserId" : 3,
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

