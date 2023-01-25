'use strict';


/**
 * Get Available Profile Languages
 *
 * returns List
 **/
exports.profileLanguages = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "country" : "country",
  "culture" : "culture",
  "languageId" : 0,
  "name" : "name",
  "lang" : "lang"
}, {
  "country" : "country",
  "culture" : "culture",
  "languageId" : 0,
  "name" : "name",
  "lang" : "lang"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

