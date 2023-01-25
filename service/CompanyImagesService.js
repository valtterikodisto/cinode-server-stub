'use strict';


/**
 * Add Image to User
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns CompanyImageModel
 **/
exports.addCompanyImage = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "extension" : "extension",
  "companyId" : 6,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "imageFileName" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 0,
  "assignedToCompanyUser" : "",
  "uploadedByCompanyUser" : ""
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get Company Images Assigned to User
 *
 * companyId Integer Company Id
 * id Integer CompanyUser Id
 * returns List
 **/
exports.companyImages = function(companyId,id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = [ {
  "extension" : "extension",
  "companyId" : 6,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "imageFileName" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 0,
  "assignedToCompanyUser" : "",
  "uploadedByCompanyUser" : ""
}, {
  "extension" : "extension",
  "companyId" : 6,
  "created" : "2000-01-23T04:56:07.000+00:00",
  "imageFileName" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
  "links" : [ {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  }, {
    "methods" : [ "methods", "methods" ],
    "rel" : "rel",
    "href" : "href"
  } ],
  "id" : 0,
  "assignedToCompanyUser" : "",
  "uploadedByCompanyUser" : ""
} ];
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

