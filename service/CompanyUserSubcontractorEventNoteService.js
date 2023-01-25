'use strict';


/**
 * Get subcontractors notes events list
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event Id
 * returns CompanyUserEventNoteModel
 **/
exports.companyUserSubcontractorEventNote = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  }, {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  } ],
  "createdByCompanyUserId" : 6,
  "visibility" : "",
  "updatedByCompanyUserId" : 1,
  "companyUserId" : 0,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "noteType" : "",
  "companyId" : 5,
  "noteDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Deletes meeting event
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event id
 * no response value expected for this operation
 **/
exports.deleteCompanyUserSubcontractorEventNote = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Creates new subcontractors note event
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * body Events_notes_body_12 Note event details (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newCompanyUserSubcontractorEventNote = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Updates subcontractor note event
 * Requires access level: PartnerManager. Requires module: Partners. 
 *
 * body Notes_id_body_12 Note event details (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id UUID Event id
 * returns CompanyUserEventNoteModel
 **/
exports.updateCompanyUserSubcontractorEventNote = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  }, {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  } ],
  "createdByCompanyUserId" : 6,
  "visibility" : "",
  "updatedByCompanyUserId" : 1,
  "companyUserId" : 0,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "noteType" : "",
  "companyId" : 5,
  "noteDate" : "2000-01-23T04:56:07.000+00:00",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

