// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

const listaSpesa = document.getElementById("listaSpesa");
const listaArray = ["carote", "funghi", "pomodoro", "lattuga", "biscotti", "spaghetti"];


// for (let i = 0; i < listaSpesa.length; i++) {
//     const item = listaSpesa [i];
//     console.log(item);
// }

let i = 0;
while (i < listaArray.length) { 
    const listItem = listaArray [i];
    i++;
    console.log(listItem);
    listaSpesa.append(listItem);
}


