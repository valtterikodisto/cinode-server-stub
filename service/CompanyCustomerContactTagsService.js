'use strict';


/**
 * Edit Tags for CustomerContact
 * Note:        Posted tags will replace any existing tags for the contact.      A new tag will be created if the Id for a tag is not provided.                Sample request:        POST /v0.1/companies/1/customers/19870/contacts/5360/tags      [          {              \"name\": \"tag-name\",              \"id\": 2          },          {              \"name\": \"tag-test\",              \"id\": 1          },      ]
 *
 * body List CompanyTagModel (optional)
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * contactId Integer CustomerContact Id
 * returns List
 **/
exports.editCustomerContactTags = function(body,companyId,customerId,contactId) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "companyId" : 0,
  "tagType" : "",
  "name" : "name",
  "id" : 6,
  "seoId" : "seoId"
}, {
  "companyId" : 0,
  "tagType" : "",
  "name" : "name",
  "id" : 6,
  "seoId" : "seoId"
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

