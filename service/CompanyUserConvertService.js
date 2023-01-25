'use strict';


/**
 * Convert company user employee to an AAD account
 * Requires access level: CompanyAdmin. 
 *
 * body CompanyUserId_convertaad_body ConvertCompanyUserToAadAccountModel (optional)
 * companyUserId Integer Company User Id
 * companyId String 
 * no response value expected for this operation
 **/
exports.convertUserToAadAccount = function(body,companyUserId,companyId) {
  return new Promise(function(resolve, reject) {
    resolve();
  });
}

