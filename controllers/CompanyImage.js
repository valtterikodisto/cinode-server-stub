'use strict';

var utils = require('../utils/writer.js');
var CompanyImage = require('../service/CompanyImageService');

module.exports.companyImage = function companyImage (req, res, next, companyId, id) {
  CompanyImage.companyImage(companyId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.companyImageDownload = function companyImageDownload (req, res, next, companyId, id, imageFileName) {
  CompanyImage.companyImageDownload(companyId, id, imageFileName)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
