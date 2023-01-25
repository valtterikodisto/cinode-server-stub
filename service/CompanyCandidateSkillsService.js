'use strict';


/**
 * Delete Candidate Skill
 * Sample request:        DELETE /v0.1/companies/1/candidates/19870/skills/577
 *
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * id Integer Skill Keyword Id
 * no response value expected for this operation
 **/
exports.deleteCompanyCandidateSkill = function(companyId,candidateId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Add a Skill to company candidate
 * Sample request:        POST /v0.1/companies/1/candidates/19870/skills      {          \"name\": \"SQL\",          \"companyCandidateId\": 19870,          \"keywordSynonymId\": 577,          \"languageId\":1      }
 *
 * body CandidateId_skills_body CompanyCandidateSkillAddEditModel (optional)
 * companyId Integer Company Id
 * candidateId Integer CandidateId Id
 * returns CompanyCandidateSkillModel
 **/
exports.newCompanyCandidateSkill = function(body,companyId,candidateId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "keywordId" : 6,
  "keywordSynonym" : "",
  "keywordSynonymId" : 1,
  "companyCandidateId" : 0,
  "keyword" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

