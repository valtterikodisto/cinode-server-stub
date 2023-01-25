'use strict';


/**
 * Add team
 * Requires access level: CompanyAdmin. 
 *
 * body CompanyId_teams_body TeamAddEditModel (optional)
 * companyId Integer Company Id
 * returns TeamModel
 **/
exports.newTeam = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "internalIdentification" : "internalIdentification",
  "costCenter" : "costCenter",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
  "companyId" : 5,
  "locationId" : 6,
  "name" : "name",
  "location" : "location",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 1,
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "parentTeamId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get team by id
 *
 * companyId Integer Company Id
 * id Integer Event Id
 * returns TeamModel
 **/
exports.team = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "internalIdentification" : "internalIdentification",
  "costCenter" : "costCenter",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
  "companyId" : 5,
  "locationId" : 6,
  "name" : "name",
  "location" : "location",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 1,
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "parentTeamId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Update team
 * Requires access level: CompanyAdmin. 
 *
 * body Teams_id_body TeamAddEditModel (optional)
 * id Integer Team Id
 * companyId Integer Company Id
 * returns TeamModel
 **/
exports.updateTeam = function(body,id,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "internalIdentification" : "internalIdentification",
  "costCenter" : "costCenter",
  "created" : "2000-01-23T04:56:07.000+00:00",
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
  "companyId" : 5,
  "locationId" : 6,
  "name" : "name",
  "location" : "location",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 1,
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "parentTeamId" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

