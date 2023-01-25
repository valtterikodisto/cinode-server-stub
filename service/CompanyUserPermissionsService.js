'use strict';


/**
 * Update Permissions for Company User
 * Requires access level: CompanyAdmin. 
 *
 * body CompanyUserId_permissions_body CompanyUserPermissionsEditModel (optional)
 * companyId Integer Company Id
 * companyUserId Integer CompanyUser Id
 * returns List
 **/
exports.updatePermissions = function(body,companyId,companyUserId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "level" : "",
  "name" : "name",
  "description" : "description",
  "id" : 1
}, {
  "level" : "",
  "name" : "name",
  "description" : "description",
  "id" : 1
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

