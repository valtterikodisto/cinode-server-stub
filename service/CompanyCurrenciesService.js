'use strict';


/**
 * Get company currencies
 *
 * companyId Integer Company Id
 * returns List
 **/
exports.companyCurrencies = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "description" : "description",
  "id" : 7,
  "currencyCode" : "currencyCode"
}, {
  "description" : "description",
  "id" : 7,
  "currencyCode" : "currencyCode"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

