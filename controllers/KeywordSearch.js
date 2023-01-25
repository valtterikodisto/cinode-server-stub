'use strict';

var utils = require('../utils/writer.js');
var KeywordSearch = require('../service/KeywordSearchService');

module.exports.searchKeyword = function searchKeyword (req, res, next, companyId, term) {
  KeywordSearch.searchKeyword(companyId, term)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
