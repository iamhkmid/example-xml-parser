const xml2js = require("xml2js");

const xml = `<test></test>`;

xml2js.parseString(xml, (err, result) => {
  if (err) {
    throw err;
  }
  const json = JSON.stringify(result, null, 4);
  console.log(json);
});
