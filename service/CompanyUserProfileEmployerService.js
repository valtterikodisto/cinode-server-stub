'use strict';


/**
 * Get profile employer by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileEmployer Id
 * returns CompanyUserProfileEmployerModel
 **/
exports.companyUserProfileEmployer = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isCurrent" : true,
  "companyId" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 0,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 1,
    "profileEmployerId" : 6,
    "name" : "name",
    "description" : "description",
    "profileTranslationId" : 5,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "profileId" : 1,
    "profileEmployerId" : 6,
    "name" : "name",
    "description" : "description",
    "profileTranslationId" : 5,
    "title" : "title"
  } ],
  "companyUserId" : 2,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 7,
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
 * Delete Profile Employer
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileEmployer = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Employer profile item
 *
 * body Profile_employers_body CompanyUserProfileEmployerAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileEmployer = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Employer
 *
 * body Employers_id_body CompanyUserProfileEmployerAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileEmployerModel
 **/
exports.updateCompanyUserProfileEmployer = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "isCurrent" : true,
  "companyId" : 5,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 0,
  "translations" : [ {
    "profileTranslation" : "",
    "profileId" : 1,
    "profileEmployerId" : 6,
    "name" : "name",
    "description" : "description",
    "profileTranslationId" : 5,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "profileId" : 1,
    "profileEmployerId" : 6,
    "name" : "name",
    "description" : "description",
    "profileTranslationId" : 5,
    "title" : "title"
  } ],
  "companyUserId" : 2,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 7,
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

