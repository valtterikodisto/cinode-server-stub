'use strict';

var utils = require('../utils/writer.js');
var CompanyUserProfileLanguages = require('../service/CompanyUserProfileLanguagesService');

module.exports.profileLanguages = function profileLanguages (req, res, next) {
  CompanyUserProfileLanguages.profileLanguages()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
