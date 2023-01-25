'use strict';


/**
 * Get absence period by id
 *
 * companyId Integer Your company id
 * companyUserId Integer The id of the actual user
 * id Integer The id for the requested absence period
 * returns AbsencePeriodModel
 **/
exports.absence = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "absenceTypeId" : 1,
  "companyId" : 0,
  "companyUserId" : 6,
  "days" : [ {
    "calendarDay" : ""
  }, {
    "calendarDay" : ""
  } ],
  "extentPercentage" : 5,
  "id" : 5,
  "absenceTypeName" : "absenceTypeName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete absence
 *
 * companyId Integer Company Id
 * companyUserId Integer Customer Id
 * id Integer Customer Id
 * no response value expected for this operation
 **/
exports.deleteAbsence = function(companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Create Absence Item for User
 *
 * body CompanyUserId_absences_body CompanyUserProfileCommitmentAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * no response value expected for this operation
 **/
exports.newAbsence = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}


/**
 * Update Absence Item for User
 *
 * body Absences_id_body CompanyUserProfileCommitmentAddEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * id Integer Absence Id
 * returns AbsencePeriodModel
 **/
exports.updateAbsence = function(body,companyId,companyUserId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "absenceTypeId" : 1,
  "companyId" : 0,
  "companyUserId" : 6,
  "days" : [ {
    "calendarDay" : ""
  }, {
    "calendarDay" : ""
  } ],
  "extentPercentage" : 5,
  "id" : 5,
  "absenceTypeName" : "absenceTypeName"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

