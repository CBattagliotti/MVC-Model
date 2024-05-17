// Cerebro de la aplicación. Según lo que SOLICITE el cliente se va a servir de todas las ACCIONES/FUNCIONES disponibles en el modelo para lograr un resultado final.

const models = require('../models/model.js');
const uuid = require('uuid');
const auxFunctions = require('../utils/aux_functions.js')


// Devuelve un array con todos los libros
const getAll = () => models.readFile();


// Devuelve el libro cuyo ID es el indicado por parámetro.
const getById = (id) => {

  const books = models.readFile();
  const bookFound = auxFunctions.auxGetById(id, books);
  return bookFound;
};


//Devuelve el libro cuyo titulo es el indicado por parámetro.
const getByName = (name) => {
  if (typeof name !== 'string') {
    return 'Por favor ingrese un titulo correcto'
  };

  const lowerCaseName = name.toLowerCase();
  const books = models.readFile();
  const book = books.filter(element => element.name.toLowerCase().includes(lowerCaseName));

  if (book.length > 0) {
    return book;
  } else {
    return "Libro no disponible";
  };
};


// Devuelve un array con los libros correspondientes al autor indicado por parámetro.
const getByAuthor = (author) => {
  const lowerCaseAuthor = author.toLowerCase();
  const books = models.readFile();
  const booksFilt = books.filter(element => element.author.toLowerCase().includes(lowerCaseAuthor));

  if (booksFilt.length > 0) {
    return booksFilt;
  } else {
    return `No existen libros de ${author} en nuestra base de datos`;
  };
};


// Elimina el libro cuyo id es el indicado por parametro.
function deleteById(id) {
  const books = models.readFile();
  const toValidate = auxFunctions.auxGetById(id, books)

  if (typeof toValidate === 'string') {
    return toValidate;
  };

  const filteredBooks = books.filter((book) => book.id !== id);

  models.createFile(filteredBooks);

  return `El libro con ID ${id} fue eliminado`
};


//Modifica el libro con los datos que envíe el cliente por ID
function updateById(data) {
  const id = data.body.id;

  const propsValidation = auxFunctions.validateBookProperties(data.body); // Valida las propiedades

  if (propsValidation !== true) {
    return propsValidation;
  };

  const validValues = auxFunctions.isValidValue(data.body) // Valida los valores

  if (typeof validValues === 'string') {
    return validValues;
  };

  const db = models.readFile();
  const newBook = auxFunctions.auxGetById(id, db);

  if (typeof newBook == 'string') {
    return newBook;
  };

  if (!newBook) {
    return 'No encontramos el libro';  
  };

  const keys = Object.keys(data.body);
// TAMBIEN FOR IN?
  for (let key of keys) {
    switch (key) {
      case 'id':
        break;
      case 'name':
        newBook.name = data.body.name;
        break;
      case 'author':
        newBook.author = data.body.author;
        break;
      case 'tags':
        newBook.tags = data.body.tags;
        break;
      case 'sold':
        newBook.sold = data.body.sold;
        break;
      default:
        return `La propiedad ${key} no existe`
    }
  };

  models.createFile(db);
  return 'Cambios realizados'
};


// Crea el libro envíado por el cliente en la base de datos.
function addBook(book) {
  const validBook = auxFunctions.validateBook(book);
  if (typeof validBook === 'string') {
    return validBook;
  };

  const books = models.readFile();

  book.id = uuid.v4(); // Asigna un id unico universal.
  books.push(book);
  models.createFile(books);
  return 'Se ha creado un nuevo libro';
};



module.exports = {
  addBook,
  updateById,
  deleteById,
  getAll,
  getByAuthor,
  getById,
  getByName
};

