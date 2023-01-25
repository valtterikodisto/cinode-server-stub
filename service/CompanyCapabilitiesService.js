'use strict';


/**
 * Get company capabilities
 *
 * companyId Integer CompanyId
 * returns CompanyCapabilitiesModel
 **/
exports.companyCapabilities = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "enabledModules" : [ {
    "moduleId" : ""
  }, {
    "moduleId" : ""
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

