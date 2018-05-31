var myArrayOfObjects = [{"id":"14","label":"7"},{"id":"15","label":"7"},{"id":"18","label":"7"}];
var indexFound = myArrayOfObjects.findIndex(myObject => myObject.id == "14");

console.log("----------------------------------------------------")
console.log("Index do item de id '14' que será removido: " + indexFound);

if (indexFound || indexFound == 0) {
    console.log("----------------------------------------------------")
    myArrayOfObjects.forEach(object => console.log("ID de itens da lista antes de remover: " + object.id));    
    myArrayOfObjects.splice(indexFound, 1); // Remove apenas 1 item da lista a partir do indice inidicado.
    console.log("----------------------------------------------------")
    myArrayOfObjects.forEach(object => console.log("ID de itens da lista depois de remover: " + object.id));
}