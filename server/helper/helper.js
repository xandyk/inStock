const fs = require("fs");
const uuid = require("uuid/v4");

function writeJSONFile(filename, content) {
  fs.writeFileSync(filename, JSON.stringify(content), "utf8", err => {
    if (err) {
      console.log(err);
    }
  });
  console.log(`changes saved to file ${filename}....`);
}

const getNewId = () => {
  return uuid();
};

module.exports = {
  writeJSONFile,
  getNewId
};
