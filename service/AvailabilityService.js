'use strict';


/**
 * Get availability for company users. Omitting companyUserId gets availability for all company users in company.
 *
 * body CompanyId_availability_body Filter options (optional)
 * companyId Integer Your Cinode Company id
 * returns List
 **/
exports.searchAvailability = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "companyUserId" : 0,
  "availability" : 6.027456183070403,
  "startDate" : "2000-01-23T04:56:07.000+00:00"
}, {
  "endDate" : "2000-01-23T04:56:07.000+00:00",
  "companyUserId" : 0,
  "availability" : 6.027456183070403,
  "startDate" : "2000-01-23T04:56:07.000+00:00"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

