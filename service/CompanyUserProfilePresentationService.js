'use strict';


/**
 * Get profile presentation
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns CompanyUserProfilePresentationModel
 **/
exports.companyUserProfilePresentation = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 1,
  "translations" : [ {
    "profileTranslation" : "",
    "personalDescription" : "personalDescription",
    "profileId" : 0,
    "description" : "description",
    "profileTranslationId" : 6,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "personalDescription" : "personalDescription",
    "profileId" : 0,
    "description" : "description",
    "profileTranslationId" : 6,
    "title" : "title"
  } ],
  "companyUserId" : 5,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 5,
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
 * Edit Profile Presentation
 *
 * body Profile_presentation_body CompanyUserProfilePresentationEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns CompanyUserProfilePresentationModel
 **/
exports.updateCompanyUserProfilePresentation = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 1,
  "translations" : [ {
    "profileTranslation" : "",
    "personalDescription" : "personalDescription",
    "profileId" : 0,
    "description" : "description",
    "profileTranslationId" : 6,
    "title" : "title"
  }, {
    "profileTranslation" : "",
    "personalDescription" : "personalDescription",
    "profileId" : 0,
    "description" : "description",
    "profileTranslationId" : 6,
    "title" : "title"
  } ],
  "companyUserId" : 5,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 5,
  "url" : "url"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

