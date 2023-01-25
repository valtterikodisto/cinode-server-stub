'use strict';

var utils = require('../utils/writer.js');
var CompanyRecruitmentManagers = require('../service/CompanyRecruitmentManagersService');

module.exports.recruitmentManagers = function recruitmentManagers (req, res, next, companyId) {
  CompanyRecruitmentManagers.recruitmentManagers(companyId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
