const readLine = require('readline');
// const colors = require('colors');
// const util = require('util')

//crear la interfaz me permitira manipular los dos procesos siguientes:
const rl = readLine.createInterface({ input: process.stdin, output: process.stdout })
//"std" stands for "standard" (standard input or output)

// rl.write('Bienvenido!\nIngrese la accion a realizar: \n');


// OPCIONES: GUARDAR EN UNA VARIABLE?? PONERLOS EN UNA FX??

let data = { action: '', body: '' };

const datos = rl.question('Bienvenido!\nIngresa la accion a realizar: \n', (userInput) => {  //question me permite solicitar un input.
    data.action = userInput.toString().trim(); //.trim() para eliminar los enter y espacios en blanco innecesarios.

    //console.log(data.action);


    rl.question('Ingrese el parametro: \n', (userInput) => {
        data.body = userInput.trim();
        // parametro = data.body;

        // rl.question('Ingrese el valor: \n', (userInput)=> { 
        //     data.body.parametro = userInput.trim();
        //     console.log(data);
        // });


        // rl.question('Por favor ingrese la accion a realizar: '.rainbow, (userInput) => {
        //data.action = userInput.toString().trim(); // 
        //rl.setPrompt('Ingrese un parametro: '.rainbow);
        //rl.prompt();
    });
});

console.log(datos);


// La funcion "on" invocara a un evento:

// rl.on('data', (userInput)=> {
//     data.action = userInput.toString().trim();
//     rl.write(`${data.action}\n`)
//     process.exit();
// })


// return data;
// rl.on('line', (input)=> {        
//     data.body = input.trim();  
//     rl.close();            
//};


// rl.on('close', () =>{
//     return data;
//     process.exit();
// })