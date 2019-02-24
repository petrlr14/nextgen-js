/* La promesa que más vamos a utilizar en el proyect */
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response)=>response.json())
    .then((data)=>{console.log(data)})
    .catch((error)=>{console.log(error)});