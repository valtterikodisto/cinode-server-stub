'use strict';


/**
 * Get company by id
 *
 * companyId Integer CompanyId
 * returns CompanyModel
 **/
exports.company = function(companyId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "addresses" : [ {
    "zipCode" : "zipCode",
    "country" : "country",
    "companyId" : 6,
    "comments" : "comments",
    "city" : "city",
    "addressType" : "",
    "street1" : "street1",
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : 1,
    "street2" : "street2",
    "email" : "email"
  }, {
    "zipCode" : "zipCode",
    "country" : "country",
    "companyId" : 6,
    "comments" : "comments",
    "city" : "city",
    "addressType" : "",
    "street1" : "street1",
    "links" : [ {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    }, {
      "methods" : [ "methods", "methods" ],
      "rel" : "rel",
      "href" : "href"
    } ],
    "id" : 1,
    "street2" : "street2",
    "email" : "email"
  } ],
  "corporateIdentityNumber" : "corporateIdentityNumber",
  "description" : "description",
  "countryId" : 2,
  "tags" : [ {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  }, {
    "companyId" : 5,
    "name" : "name",
    "id" : 5,
    "seoId" : "seoId"
  } ],
  "defaultCurrency" : "",
  "name" : "name",
  "links" : [ null, null ],
  "id" : 9,
  "seoId" : "seoId",
  "isTaxRegistered" : true,
  "registrationYear" : 0,
  "vatNumber" : "vatNumber",
  "currencies" : [ {
    "description" : "description",
    "id" : 7,
    "currencyCode" : "currencyCode"
  }, {
    "description" : "description",
    "id" : 7,
    "currencyCode" : "currencyCode"
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

