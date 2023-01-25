'use strict';


/**
 * Translates any mention-ids in a text to their human readable form.   Translations are access restricted, if you don't have enough access  to get the name of an id, it won't be translated.
 *
 * body Mentions_tonaturaltext_body The model with one property, value, which contains the text containing the mentions you're looking to translate.  Example of a text with a mention inside: `"Hello @(1|123456) can you please consider this role?"` (optional)
 * companyId Integer Company Id
 * returns String
 **/
exports.translateMentions = function(body,companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

