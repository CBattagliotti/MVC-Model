// Define las distintas ACCIONES que puedo realizar con la base de datos.
const fs = require('fs');
const path = './DB/db.json';


//Lee la base de datos y la devuelve en formato JS
function readFile() {
  if (!fs.existsSync(path)) {
    fs.writeFileSync(path, JSON.stringify([]))
  }
  const db = fs.readFileSync(path, { encoding: 'utf-8' });
  const dbJs = JSON.parse(db);
  return dbJs;
};


// Sobreescribe la base de datos con los datos ingresados por parametro.
function createFile(data) {
  const dataJson = JSON.stringify(data);
  fs.writeFileSync(path, dataJson);
};



module.exports = {
  readFile,
  createFile
};