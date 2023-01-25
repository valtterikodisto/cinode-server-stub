'use strict';


/**
 * Get Company Image by Id
 *
 * companyId Integer Company Id
 * id Integer Image id
 * returns CompanyImageModel
 **/
exports.companyImage = function(companyId,id) {
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
 * Download Company Image
 *
 * companyId Integer Company Id
 * id Integer Image id
 * imageFileName UUID Image File Name
 * returns byte[]
 **/
exports.companyImageDownload = function(companyId,id,imageFileName) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

