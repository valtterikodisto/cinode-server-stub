'use strict';


/**
 * Get skill by id
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer Skill Id
 * returns CompanyUserSkillModel
 **/
exports.skill = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "companyId" : 0,
  "level" : 2,
  "levelGoal" : 7,
  "companyUserId" : 6,
  "profileId" : 5,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "numberOfDaysWorkExperience" : 1,
  "id" : 5,
  "keyword" : "",
  "favourite" : true,
  "levelGoalDeadline" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

