'use strict';


/**
 * Get profile work experience by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer ProfileWorkExperience Id
 * returns CompanyUserProfileWorkExperienceModel
 **/
exports.companyUserProfileWorkExperience = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "skills" : [ {
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
  }, {
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
  } ],
  "isCurrent" : true,
  "companyId" : 1,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 9,
  "translations" : [ {
    "profileWorkExperienceId" : 2,
    "profileTranslation" : "",
    "profileId" : 4,
    "employer" : "employer",
    "description" : "description",
    "profileTranslationId" : 7,
    "title" : "title"
  }, {
    "profileWorkExperienceId" : 2,
    "profileTranslation" : "",
    "profileId" : 4,
    "employer" : "employer",
    "description" : "description",
    "profileTranslationId" : 7,
    "title" : "title"
  } ],
  "locationId" : 1,
  "companyUserId" : 2,
  "links" : [ null, null ],
  "id" : 3,
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
 * Delete Profile Work Experience Item
 *
 * id Integer Profile Item Id
 * companyId Integer Company Id
 * companyUserId Integer Company User Id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserProfileWorkExperience = function(id,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create WorkExperience Profile Item
 *
 * body Profile_workexperiences_body CompanyUserWorkExperienceAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfileWorkExperience = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Profile Work Experience
 *
 * body Workexperiences_id_body CompanyUserProfileWorkExperienceAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer 
 * returns CompanyUserProfileWorkExperienceModel
 **/
exports.updateCompanyUserProfileWorkExperience = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "skills" : [ {
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
  }, {
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
  } ],
  "isCurrent" : true,
  "companyId" : 1,
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "profileId" : 9,
  "translations" : [ {
    "profileWorkExperienceId" : 2,
    "profileTranslation" : "",
    "profileId" : 4,
    "employer" : "employer",
    "description" : "description",
    "profileTranslationId" : 7,
    "title" : "title"
  }, {
    "profileWorkExperienceId" : 2,
    "profileTranslation" : "",
    "profileId" : 4,
    "employer" : "employer",
    "description" : "description",
    "profileTranslationId" : 7,
    "title" : "title"
  } ],
  "locationId" : 1,
  "companyUserId" : 2,
  "links" : [ null, null ],
  "id" : 3,
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

