/* let vs var */
let variable1="Hola let";   
var variable2="Hola var"

for(let i=0; i<2; i++){
    var variable2=i+" ";
    let variable1=i+" ";
    console.log(variable1, variable2);
}

console.log("let", variable1);
console.log("var", variable2);

/* const */
//const CONST=123;
//CONST+=12; /* Error, ya que no se permite modificar una constane */
/* const obj={
    name:"Juanito",
    age:21,
    job:"twitch streamer"
}

obj.name="Esteban";
console.log(obj);
 */