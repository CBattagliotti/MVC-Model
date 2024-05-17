// Contiene las funciones que se encargan especificamente de hace validaciones.

// valida si el tipo dato id es string
function isValidId(id) {
  if (typeof id !== 'string') {
    return 'El ID ingresado es incorrecto'
  }
  return true;
};


// Retorna el libro buscado por id
function auxGetById(id, db) {
  if (!id) {
    return 'Por favor indique el id'
  };  //Retorna el mensaje de error si no ingreso el id

  const validId = isValidId(id);

  if (validId !== true) {
    return validId; // Retorna el mensaje de error si el ID no es válido
  };

  const book = db.find(element => element.id === id);

  if (!book) {  //Retorna el mensaje de error si no encuentra el libro
    return 'El libro indicado por id no existe';
  } else {
    return book;
  };
};


// Retorna un mensaje de error si alguna propiedad no es valida.
function validateBookProperties(book) {
  const validProps = ['name', 'author', 'tags', 'sold', 'id'];
  const bookKeys = Object.keys(book);

  for (let key of bookKeys) {
    if (!validProps.includes(key)) {
      return `La propiedad "${key}" no es válida para un libro`;
    };
  };

  return true;
};


// Retorna un mensaje de error si el tipo de dato contenido en la propiedad es incorrecto.
function isValidValue(data) {
  if (data.name && typeof data.name !== 'string') {
    return 'El titulo ingresado es incorrecto'
  };

  if (data.author && typeof data.author !== 'string') {
    return 'El autor ingresado es incorrecto'
  };

  if (data.tags && typeof data.tags !== 'object') {
    return 'El genero ingresado es incorrecto'
  };

  if (data.sold && typeof data.sold !== 'number') {
    return 'La cantidad ingresada es incorrecta'
  };

  return true;
};


// Retorna un mensaje de error si alguna propiedad de "book" esta vacia.
function validateBook(book) {
  if (!book.name || !book.author || !book.sold && book.sold != 0 || !book.tags.length || typeof book.tags !== 'object') {

    return 'Propiedades faltantes';
  };

  return true;
};



module.exports = {
  auxGetById,
  validateBookProperties,
  isValidValue,
  validateBook
};