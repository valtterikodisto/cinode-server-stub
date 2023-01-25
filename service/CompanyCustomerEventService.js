'use strict';


/**
 * Get customer event by id
 * Requires access level: CompanyManager. Requires module: Customers. 
 *
 * companyId Integer Company Id
 * customerId Integer Customer Id
 * id UUID Event Id
 * returns CustomerEventModel
 **/
exports.companyCustomerEvent = function(companyId,customerId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "comments" : [ {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  }, {
    "eventId" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
    "companyUserId" : 5,
    "created" : "2000-01-23T04:56:07.000+00:00",
    "companyUserName" : "companyUserName",
    "id" : 5,
    "text" : "text"
  } ],
  "createdByCompanyUserId" : 6,
  "visibility" : "",
  "updatedByCompanyUserId" : 1,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "description" : "description",
  "type" : "",
  "title" : "title",
  "companyId" : 5,
  "customerId" : 0,
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "updated" : "2000-01-23T04:56:07.000+00:00",
  "eventDate" : "2000-01-23T04:56:07.000+00:00"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

