const fs = require("fs")
fs.writeFile("texto1.txt", "Archivo creado desde NODE", function(){
    console.log("Archivo creado")
})
console.log("Ultima linea")