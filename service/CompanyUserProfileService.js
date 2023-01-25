'use strict';


/**
 * Get profile by company user id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns CompanyUserProfileFullModel
 **/
exports.companyUserProfile = function(companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "employers" : [ {
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
  }, {
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
  } ],
  "commitments" : [ {
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
  }, {
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
  } ],
  "education" : [ {
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
  }, {
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
  } ],
  "profileTranslation" : "",
  "references" : [ {
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
  }, {
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
  } ],
  "languages" : [ {
    "companyId" : 8,
    "level" : 1,
    "profileId" : 2,
    "companyUserId" : 6,
    "language" : "",
    "links" : [ null, null ],
    "id" : 4,
    "url" : "url"
  }, {
    "companyId" : 8,
    "level" : 1,
    "profileId" : 2,
    "companyUserId" : 6,
    "language" : "",
    "links" : [ null, null ],
    "id" : 4,
    "url" : "url"
  } ],
  "companyUserId" : 1,
  "workExperience" : [ {
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
  }, {
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
  } ],
  "training" : [ {
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
  }, {
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
  } ],
  "userId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "createdWhen" : "2000-01-23T04:56:07.000+00:00",
  "skills" : [ null, null ],
  "presentation" : "",
  "companyId" : 9,
  "extSkills" : [ {
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
  }, {
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
  } ],
  "translations" : [ {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  }, {
    "profileId" : 7,
    "languageBranchId" : 9,
    "profileTranslationId" : 2,
    "languageBranch" : ""
  } ],
  "publishedWhen" : "2000-01-23T04:56:07.000+00:00",
  "profileTranslationId" : 3,
  "links" : [ null, null ],
  "id" : 8,
  "updatedWhen" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create Profile for user
 *
 * body CompanyUserId_profile_body CompanyUserProfileCommitmentAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserProfile = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

