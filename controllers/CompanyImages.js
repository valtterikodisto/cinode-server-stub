'use strict';

var utils = require('../utils/writer.js');
var CompanyImages = require('../service/CompanyImagesService');

module.exports.addCompanyImage = function addCompanyImage (req, res, next, companyId, id) {
  CompanyImages.addCompanyImage(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyImages = function companyImages (req, res, next, companyId, id) {
  CompanyImages.companyImages(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
