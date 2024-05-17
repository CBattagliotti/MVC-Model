const net = require('net');
const client = new net.createConnection({ port: 3000 });


client.on('connect', () => {
    const book = {
        name: "false",
        author: "Hermann Hesse",
        tags: ["Comedia", "Filosofia"],
        sold: 14
    }

    // const data = {action: 'read'};
    // const data = {action: 'findBook', body: {id: id}};
    // const data = {action: 'create', body: book};
    // const data = {action: 'getByTitle', body: {name: book.name}};
    // const data = {action: 'booksByAuthor', body: {author: book.author}};
    // const data = {action: 'delete', body: {id: "13"}};
    // const data = {action: 'update', body: {id: "13", sold: 130}};
   
    const message = JSON.stringify(data);
    client.write(message);
});



client.on('data', (serverMessage) => {
    console.log(JSON.parse(serverMessage));
});








// rl.question('Ingresa la accion a realizar: \n'.pink, (userInput)=> {  //question me permite solicitar un input.
//    data.action = userInput;
//    rl.close();
//    rl.setPrompt('Por favor ingrese el parametro de busqueda: \n'.pink);
//    rl.prompt();

   
    // console.log('Cliente dice', userInput);
// });

// rl.question('\nPor favor ingrese el parametro de busqueda: \n', (userInput)=> { 
//     data.body = userInput.trim();
//     rl.close();
// });

// console.log(data);

// rl.on('line', (input)=> {                      // La funcion "on" invocara a un evento.
//     // console.log(`Ingresaste: ${input}`);
//     if (input.trim() === 'salir'){             // .trim() para eliminar los enter y espacios en blanco innecesarios.
//         process.exit();
//     };

//     data.body = input.trim()
// })


