const obj={
    name:"Steve",
    age:32
}

const fun=(obj1, obj2)=>{
    console.log(obj1===obj2);
    console.log(obj2);
}
fun(obj, obj);
/* fun(obj, {...obj}); */