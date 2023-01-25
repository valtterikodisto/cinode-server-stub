'use strict';

var utils = require('../utils/writer.js');
var Mentions = require('../service/MentionsService');

module.exports.translateMentions = function translateMentions (req, res, next, body, companyId) {
  Mentions.translateMentions(body, companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
