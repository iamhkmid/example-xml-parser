import xml2js from "xml2js";

const xml = ``;

xml2js.parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }
  const json = JSON.stringify(result, null, 4);
  console.log(json);
});
