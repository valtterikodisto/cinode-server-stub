const fs = require("fs");

function toCamelCase(str) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, function (word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(/\s+/g, "");
}

function convertOperationIdToCamelCase(obj) {
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      const element = obj[key];
      if (element && typeof element === "object") {
        convertOperationIdToCamelCase(element);
      } else if (key === "operationId") {
        obj[key] = toCamelCase(element);
      }
    }
  }
}

const jsonString = fs.readFileSync("cinode.json", "utf8");
const json = JSON.parse(jsonString);

convertOperationIdToCamelCase(json);

fs.writeFileSync("cinode.json", JSON.stringify(json));
