'use strict';


/**
 * Search users by skill keyword id
 *
 * body Skills_search_body SearchSkillQueryModel (optional)
 * companyId Integer Company Id
 * returns SearchSkillResultModel
 **/
exports.searchSkill = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "hits" : [ {
    "lastName" : "lastName",
    "firstname" : "firstname",
    "teams" : [ {
      "companyId" : 6,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 0
    }, {
      "companyId" : 6,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 0
    } ],
    "companyCandidateId" : 9,
    "companyUserId" : 6,
    "addressDisplayName" : "addressDisplayName",
    "groups" : [ {
      "companyId" : 1,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 6
    }, {
      "companyId" : 1,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 6
    } ],
    "title" : "title",
    "lastname" : "lastname",
    "addressId" : 1,
    "companyUserType" : "",
    "skills" : [ {
      "keywordId" : 5,
      "keywordSynonymId" : 5,
      "keywordSynonymName" : "keywordSynonymName",
      "level" : 7,
      "masterSynonymName" : "masterSynonymName",
      "masterSynonymId" : 2
    }, {
      "keywordId" : 5,
      "keywordSynonymId" : 5,
      "keywordSynonymName" : "keywordSynonymName",
      "level" : 7,
      "masterSynonymName" : "masterSynonymName",
      "masterSynonymId" : 2
    } ],
    "firstName" : "firstName",
    "companyId" : 0,
    "seoId" : "seoId",
    "status" : ""
  }, {
    "lastName" : "lastName",
    "firstname" : "firstname",
    "teams" : [ {
      "companyId" : 6,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 0
    }, {
      "companyId" : 6,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 0
    } ],
    "companyCandidateId" : 9,
    "companyUserId" : 6,
    "addressDisplayName" : "addressDisplayName",
    "groups" : [ {
      "companyId" : 1,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 6
    }, {
      "companyId" : 1,
      "name" : "name",
      "description" : "description",
      "links" : [ {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      }, {
        "methods" : [ "methods", "methods" ],
        "rel" : "rel",
        "href" : "href"
      } ],
      "id" : 6
    } ],
    "title" : "title",
    "lastname" : "lastname",
    "addressId" : 1,
    "companyUserType" : "",
    "skills" : [ {
      "keywordId" : 5,
      "keywordSynonymId" : 5,
      "keywordSynonymName" : "keywordSynonymName",
      "level" : 7,
      "masterSynonymName" : "masterSynonymName",
      "masterSynonymId" : 2
    }, {
      "keywordId" : 5,
      "keywordSynonymId" : 5,
      "keywordSynonymName" : "keywordSynonymName",
      "level" : 7,
      "masterSynonymName" : "masterSynonymName",
      "masterSynonymId" : 2
    } ],
    "firstName" : "firstName",
    "companyId" : 0,
    "seoId" : "seoId",
    "status" : ""
  } ],
  "query" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

