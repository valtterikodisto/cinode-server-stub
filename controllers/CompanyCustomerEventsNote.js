'use strict';

var utils = require('../utils/writer.js');
var CompanyCustomerEventsNote = require('../service/CompanyCustomerEventsNoteService');

module.exports.companyCustomerEventNote = function companyCustomerEventNote (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsNote.companyCustomerEventNote(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteNote = function deleteNote (req, res, next, companyId, customerId, id) {
  CompanyCustomerEventsNote.deleteNote(companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.newNote = function newNote (req, res, next, body, companyId, customerId) {
  CompanyCustomerEventsNote.newNote(body, companyId, customerId)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.updateNote = function updateNote (req, res, next, body, companyId, customerId, id) {
  CompanyCustomerEventsNote.updateNote(body, companyId, customerId, id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
