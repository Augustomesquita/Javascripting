// Cria array de objetos.
var myArrayOfObjects = [
  { id: 18, label: "7" },
  { id: 14, label: "3" },
  { id: 16, label: "2" }
];

// Ordena array com objeos de menor indice para o maior.
myArrayOfObjects.sort((a, b) => {
  return a.id > b.id; // Em caso positivo, o elemento 'b' assume posição do elemento 'a'.
});

// Procura indice do elemento de id '14'.
var idToSearch = 14;
var indexFound = myArrayOfObjects.findIndex(myObject => myObject.id === idToSearch);

console.log("----------------------------------------------------");
console.log("Index do item de id " + idToSearch + " que será removido: " + indexFound);
console.log("----------------------------------------------------");

if (indexFound > -1) {
  myArrayOfObjects.forEach(object =>
    console.log("ID de itens da lista antes de remover: " + object.id)
  );

  myArrayOfObjects.splice(indexFound, 1); // Remove apenas 1 item da lista a partir do indice inidicado.
  console.log("----------------------------------------------------");
  
  myArrayOfObjects.forEach(object =>
    console.log("ID de itens da lista depois de remover: " + object.id)
  );
} else {
    console.log("Falha ao remover item. ID não encontrado.")
}

// Aplica reduce em array para acumular valor (no caso os valores somados
// são os id's do elementos da array).
var sumID = myArrayOfObjects.reduce((prev, cur) => prev + cur.id, 0);
console.log("Soma de ID's usando reduce: " + sumID);