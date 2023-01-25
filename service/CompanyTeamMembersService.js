'use strict';


/**
 * Add team member
 * Requires access level: CompanyAdmin. 
 *
 * body TeamId_members_body TeamMemberAddModel (optional)
 * companyId Integer Company Id
 * teamId Integer Team Id
 * returns TeamMemberModel
 **/
exports.addTeamMember = function(body,companyId,teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 1,
  "companyUserId" : 6,
  "teamId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "companyUser" : "",
  "team" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get team member
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * id Integer User id
 * returns TeamMemberModel
 **/
exports.getTeamMember = function(companyId,teamId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 1,
  "companyUserId" : 6,
  "teamId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "companyUser" : "",
  "team" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get team members
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * returns List
 **/
exports.getTeamMembers = function(companyId,teamId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "availabilityPercent" : 1,
  "companyUserId" : 6,
  "teamId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "companyUser" : "",
  "team" : ""
}, {
  "availabilityPercent" : 1,
  "companyUserId" : 6,
  "teamId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "companyUser" : "",
  "team" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Remove team member
 * Requires access level: CompanyAdmin. 
 *
 * companyId Integer Company Id
 * teamId Integer Team Id
 * id Integer User Id
 * no response value expected for this operation
 **/
exports.removeTeamMember = function(companyId,teamId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update team member
 * Requires access level: CompanyAdmin. 
 *
 * body Members_id_body TeamMemberAddModel (optional)
 * companyId Integer Company Id
 * teamId Integer Team Id
 * id Integer User id
 * returns TeamMemberModel
 **/
exports.updateTeamMember = function(body,companyId,teamId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "availabilityPercent" : 1,
  "companyUserId" : 6,
  "teamId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "companyUser" : "",
  "team" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

