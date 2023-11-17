const http = require('http');
const fs = require("fs")
//fs.writeFile("texto.txt", "ghghggt ")

const PORT = 3000;
// request
const server = http.createServer((req, res) => {
  if (req.method === 'GET') {
    var nombre = req.url.split("?")[0]
    nombre=nombre.replace("/","")
    const edad = req.url.split("?")[1]
    const booleano = req.url.split("?")[2]
   
    if (edad >=18 && booleano == "si") {
        fs.appendFileSync("texto.txt", `Hola ${nombre} eres mayor de edad \n `)
        console.log("Eres mayor de edad")
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hola ' + nombre +' eres mayor de edad ' + edad);
       
    } else {
        console.log("Eres menor de edad")
        //res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end('hola '+ nombre + " "+ 'Eres menor de edad '  + edad);
    }
    console.log(nombre)
    console.log(edad)
        
} else {
    //res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('404 Not Found');
  }
});

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});