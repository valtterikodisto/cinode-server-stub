'use strict';


/**
 * Search keywords by term
 *
 * companyId Integer Company Id
 * term String Search term
 * returns List
 **/
exports.searchKeyword = function(companyId,term) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "synonyms" : [ "synonyms", "synonyms" ],
  "verified" : true,
  "id" : 0,
  "type" : "",
  "masterSynonym" : "masterSynonym",
  "universal" : true,
  "masterSynonymId" : 6
}, {
  "synonyms" : [ "synonyms", "synonyms" ],
  "verified" : true,
  "id" : 0,
  "type" : "",
  "masterSynonym" : "masterSynonym",
  "universal" : true,
  "masterSynonymId" : 6
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

